package com.msc.service;

import com.msc.pojo.Trip;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Component
@Transactional
public class DataAnalyseService {

    /**
     * 按照时间分割数据，天/小时/数据
     * @param trips 需要处理的数据
     * @return 分割好的数据
     */
    public Map<Timestamp, List[]> splitByTime(List<Trip> trips) {
        Map<Timestamp, List[]> map = new HashMap<>();
        int day = 0;
        List[] lists = null;
        for(Trip trip: trips) {
            if(day != trip.getInTime().getDate()) {
                day = trip.getInTime().getDate();
                lists = new List[24];
                for(int i = 0; i < lists.length; i++)
                    lists[i] = new LinkedList();
                map.put(new Timestamp(trip.getInTime().getTime() / (24 * 60 * 60 * 1000) * (24 * 60 * 60 * 1000)), lists);
            }
            lists[trip.getInTime().getHours()].add(trip);
        }
        return map;
    }

    public int[][] getPrice(List<Trip> trips) {
        int[][] prices = new int[169][169];
        int count = 0;
        for(Trip trip: trips) {
            if(prices[trip.getStationIn()][trip.getStationOut()] == 0) {
                prices[trip.getStationIn()][trip.getStationOut()] = trip.getPrice() / 100;
                prices[trip.getStationOut()][trip.getStationIn()] = trip.getPrice() / 100;
                count++;
            }
            if(count == 168) break;
        }
        return prices;
    }

    /**
     * 分时间统计
     * @param trips
     * @return
     */
    public int[][] countStationFlow(List<Trip> trips) {
        int[][] stationFlow = new int[2][169];
        for(Trip trip: trips) {
            stationFlow[0][trip.getStationIn()]++;
            stationFlow[0][trip.getStationOut()]++;
        }
        return stationFlow;
    }
}

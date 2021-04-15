package com.msc.service;

import com.msc.pojo.Trip;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.*;

@Component
@Transactional
public class DataHandleService {
    class Node{
        public String name;
        public String size;
        public int category;
        public int value;

        public Node() {}

        public Node(String name, String size, int category, int value) {
            this.name = name;
            this.size = size;
            this.category = category;
            this.value = value;
        }
    }

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

    /**
     * 获取两站之间的车票价格
     * @param trips 旅途信息，应该输入的是所有乘车信息
     * @return 车票价格矩阵
     */
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
     * 根据输入的旅途信息，统计各个战的流量信息
     * @param trips 旅途信息
     * @return 出站和入站流量数组，[0]为入站，[1]为出站
     */
    public int[][] countStationFlow(List<Trip> trips) {
        int[][] stationFlow = new int[2][169];
        for(Trip trip: trips) {
            stationFlow[0][trip.getStationIn()]++;
            stationFlow[0][trip.getStationOut()]++;
        }
        return stationFlow;
    }

    /**
     * 将输入的数据按照日期所属周内日、小时进行分割
     * map的integer恒为3位，第一位为1~7的数字，代表周内日；后两位0~23代表小时
     * @param trips 数据信息
     * @return 分割好的数据
     */
    public Map<Integer, List<Trip>> splitByWeekAndHour(List<Trip> trips) {
        Map<Integer, List<Trip>> res = new HashMap<>();

        for(Trip trip: trips) {
            Date date = new Date(trip.getInTime().getTime());
            int weekDay = 1;
            int hour = 1;
            Integer key = weekDay * 100 + hour;
            if(!res.containsKey(key))
                res.put(key, new LinkedList<>());
            res.get(key).add(trip);
        }

        return res;
    }
}

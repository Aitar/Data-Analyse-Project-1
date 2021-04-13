package com.msc.mapper;

import com.msc.pojo.Trip;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TripMapper {

    @Select("select * from trips")
    @Results(id = "tripMap", value = {
            @Result(column = "station_in", property = "stationIn"),
            @Result(column = "station_out", property = "stationOut"),
            @Result(column = "in_time", property = "inTime"),
            @Result(column = "out_time", property = "outTime")
    })
    List<Trip> getAll();

//    @Select("select * from trips limit #{start} ")
//    List<Trip> get1000PerTime(int start)

    List<Trip> getByTime();

    List<Trip> getByInStation();
}

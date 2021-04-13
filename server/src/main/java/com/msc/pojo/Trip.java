package com.msc.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Trip {
    int stationIn;
    int stationOut;
    Timestamp inTime;
    Timestamp outTime;
    int price;
}

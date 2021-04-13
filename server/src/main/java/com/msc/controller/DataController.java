package com.msc.controller;

import com.msc.mapper.TripMapper;
import com.msc.pojo.Trip;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class DataController {

    final TripMapper tripMapper;

    public DataController(TripMapper tripMapper) {
        this.tripMapper = tripMapper;
    }

    @GetMapping("/all")
    public List<Trip> getAll() {
        return this.tripMapper.getAll();
    }
}

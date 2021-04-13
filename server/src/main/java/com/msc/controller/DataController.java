package com.msc.controller;

import com.msc.mapper.TripMapper;
import com.msc.pojo.Trip;
import com.msc.service.DataAnalyseService;
import com.msc.util.Cache;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class DataController {

    final TripMapper tripMapper;
    final DataAnalyseService dataAnalyseService;
    final Cache cache;

    public DataController(TripMapper tripMapper,
                          DataAnalyseService dataAnalyseService,
                          Cache cache
    ) {
        this.tripMapper = tripMapper;
        this.dataAnalyseService = dataAnalyseService;
        this.cache = cache;
        this.cache.initCache(tripMapper);
    }

    @GetMapping("/all")
    public List<Trip> getAll() {
        dataAnalyseService.splitByTime(cache.trips);
        return cache.trips;
    }
}

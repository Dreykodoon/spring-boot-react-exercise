package com.nexttech.exercise.element;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class ElementController {

    @Autowired
    private ElementService elementService;

    @RequestMapping(value = "/api/document/{id}", method = RequestMethod.GET)
    public ResponseEntity<Element> getElementChildren(@PathVariable String id) {
        List<Element> elements = elementService.getElementChildren(id);
        return new ResponseEntity(elements, HttpStatus.OK);
    }
}

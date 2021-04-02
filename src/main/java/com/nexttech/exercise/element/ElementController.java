package com.nexttech.exercise.element;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class ElementController {

    @Autowired
    private ElementService elementService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public ResponseEntity<Element> getElements() {
        List<Element> elements = elementService.getElements();
        System.out.println("hello " + elements.size());
        for (Element el: elements) {
            System.out.println(el.toString());
        }
        return new ResponseEntity(elements, HttpStatus.OK);
    }
}

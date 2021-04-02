package com.nexttech.exercise.element;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElementService {

    @Autowired
    private ElementDAO elementDAO;

    public List<Element> getElementChildren(String elementId) {
        if (elementId.equals("root")) {
            return elementDAO.getRootElementChildren();
        }
        return elementDAO.getElementChildren(Long.parseLong(elementId));
    }
}

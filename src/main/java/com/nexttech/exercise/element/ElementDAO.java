package com.nexttech.exercise.element;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ElementDAO {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Element> getElementChildren(Long elementId) {
        TypedQuery<Element> query = entityManager.createNamedQuery("query_element_children", Element.class);
        query.setParameter("parentId", elementId);
        return query.getResultList();
    }

    public List<Element> getRootElementChildren() {
        TypedQuery<Element> query = entityManager.createNamedQuery("query_root_element_children", Element.class);
        return query.getResultList();
    }
}

package com.springymcmongoface.controllers;

import com.springymcmongoface.models.ReviewForm;
import com.springymcmongoface.repository.SpringyMcMongoFaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
public class SpringyMcMongoFaceController {

    @Autowired
    private SpringyMcMongoFaceRepository springyMcMongoFaceRepository;

    @RequestMapping(value = "/createReviewForm")
    public Map<String, Object> createReviewForm(@RequestParam(value = "name") String name, @RequestParam(value = "changeOrder") String changeOrder,
                                                @RequestParam(value = "installDate") String installDate) {

        ReviewForm reviewForm = new ReviewForm(name, changeOrder, installDate);

        springyMcMongoFaceRepository.save(reviewForm);
        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("message", "Document created successfully");
        response.put("reviewForm", reviewForm);

        return response;
    }

    @RequestMapping(value = "/deleteReviewForm")
    public Map<String, String> delete(@RequestParam(value="documentId") String documentId) {

        Map<String, String> response = new HashMap<String, String>();

        if(springyMcMongoFaceRepository.findOne(documentId) != null) {

            springyMcMongoFaceRepository.delete(documentId);

            response.put("message", "Document was deleted successfully.");
        }

        else {

            response.put("message", "Delete was not successful: Document not found.");
        }

        return response;
    }

    @RequestMapping(value = "/getAllReviews", method = RequestMethod.GET)
    public Map<String, Object> getAllReviews() {

        List<ReviewForm> reviewForms = springyMcMongoFaceRepository.findAll();

        Map<String, Object> response = new HashMap<String, Object>();

        response.put("totalDocuments", reviewForms.size());
        response.put("reviewForms", reviewForms);

        return response;
    }
}

package com.designisdead.aemvuedemo.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import javax.annotation.PostConstruct;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.StreamSupport;

@Model(adaptables = Resource.class)
public class FaqModel {

    @ChildResource
    @Named("faqItems")
    private Resource faqItemsResource;

    private List<FaqItem> faqItems = new ArrayList<>();

    @PostConstruct
    public void init() {
        StreamSupport.stream(faqItemsResource.getChildren().spliterator(), false)
                .map(Resource::getValueMap)
                .map(this::createFaqItemFromProperties)
                .forEach(faqItems::add);
    }

    public List<FaqItem> getFaqItems() {
        return faqItems;
    }

    private FaqItem createFaqItemFromProperties(ValueMap properties) {
        return new FaqItem(
                properties.get("question", String.class),
                properties.get("answer", String.class)
        );
    }

    public class FaqItem {
        private String question;
        private String answer;

        public FaqItem(String question, String answer) {
            this.question = question;
            this.answer = answer;
        }

        public String getQuestion() {
            return question;
        }

        public String getAnswer() {
            return answer;
        }
    }
}

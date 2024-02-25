package com.example.application.views.pages;

import com.example.application.views.component.formStepper.FormStepperView;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("record-allergy-form")
public class RecordAllergyForm extends VerticalLayout {

    Dashboard sidebar = new Dashboard();
    FormStepperView formStepperView = new FormStepperView();
    public RecordAllergyForm () {
        Div main = new Div();
        main.add(sidebar, formStepperView);

        add(main);
    }
}
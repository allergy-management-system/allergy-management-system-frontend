package com.example.application.views.component.allergyForm;

import com.example.application.views.component.formStepper.FormFields;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Paragraph;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.radiobutton.RadioButtonGroup;
import com.vaadin.flow.component.radiobutton.RadioGroupVariant;
import com.vaadin.flow.component.textfield.TextArea;

@CssImport("./themes/frontend/AllergyForm.css")
public class Form3 extends Div {

    FormFields formFields = new FormFields();

    public Form3 () {
        H3 title = new H3("Food Allergy Form");
        Paragraph subTitle = new Paragraph("History and Current Status");
        VerticalLayout titleGroup = new VerticalLayout();
        titleGroup.add(title, subTitle);
        titleGroup.addClassName("title-group");

        Paragraph label1 = new Paragraph("Have you ever experienced any of these symptoms");
        TextArea experience = new TextArea();

        formFields.setSymptomsExperienced(experience.getValue());
        experience.setWidthFull();
        experience.setHeight("120px");
        Div verticalGroup1 = new Div();
        verticalGroup1.addClassName("vertical-group");
        verticalGroup1.add(label1, experience);

        Paragraph label2 = new Paragraph("Do you have any medication allergy?");
        RadioButtonGroup<String> medication = new RadioButtonGroup<>();
        medication.addThemeVariants(RadioGroupVariant.LUMO_VERTICAL);
        medication.setItems("Yes", "No");
        medication.setValue("Yes");

        formFields.setMedicationAllergy(medication.getValue());
        Div verticalGroup2 = new Div();
        verticalGroup2.addClassName("vertical-group");
        verticalGroup2.add(label2, medication);

        Paragraph label3 = new Paragraph("Have you ever experienced any of these symptoms");
        TextArea notes = new TextArea();

        formFields.setAdditionalNotes(notes.getValue());
        notes.setWidthFull();
        notes.setHeight("120px");
        Div verticalGroup3 = new Div();
        verticalGroup3.addClassName("vertical-group");
        verticalGroup3.add(label3, notes);

        VerticalLayout form = new VerticalLayout();
        form.add(verticalGroup1, verticalGroup2, verticalGroup3);

        add(titleGroup, form);
        addClassName("form-page");
    }
}

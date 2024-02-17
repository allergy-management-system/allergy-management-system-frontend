package com.example.application.views.component.registerForm;

import com.example.application.services.User;
import com.example.application.services.authentication.AuthServices;
import com.example.application.views.pages.LoginPage;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.EmailField;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@CssImport("./themes/frontend/Register.css")
public class RegisterForm extends VerticalLayout {

    private final AuthServices authServices;

    User user = new User();

    TextField name = new TextField("Name");
    EmailField email = new EmailField("Email");
    PasswordField password = new PasswordField("Password");
    Button button = new Button("Sign up");

    VerticalLayout form = new VerticalLayout();

    public RegisterForm (AuthServices authServices) {
        this.authServices = authServices;
        addClassName("register-form");

        H2 title = new H2("Create your free account");
        title.addClassName("title");

        name.setPlaceholder("Type your name");
        name.addClassName("text-field");

        email.setPlaceholder("Type your email");
        email.addClassName("text-field");

        password.setPlaceholder("Type your password");
        password.addClassName("text-field");

        button.addClassName("register-button");
        button.addClickListener(event -> register());
        button.addClickShortcut(Key.ENTER);

        HorizontalLayout footerText = new HorizontalLayout();
        footerText.addClassName("footer-text");
        Span alreadyHaveAnAccount = new Span("Already have an account?");
        Anchor signIn = new Anchor("/login", "Sign in");

        footerText.add(alreadyHaveAnAccount, signIn);
        footerText.setAlignItems(Alignment.CENTER);

        form.add(title, name, email, password, button, footerText);

        add(form);
    }

    private void register() {

        RegisterForm.ValidationResult validationResult = validateForm(name.getValue(), email.getValue(), password.getValue());

        if (validationResult.isValid()) {
            submitForm(name.getValue(), email.getValue(), password.getValue());
        } else {
            String errorMessage = validationResult.getErrorMessage();
            showErrorMessage(errorMessage);
        }
    }

    private void submitForm(String name, String email, String password) {
        user.setFirstName(String.valueOf(name));
        user.setLastName("Larry");
        user.setEmail(String.valueOf(email));
        user.setGender("male");
        user.setPassword(String.valueOf(password));
        user.setDateOfBirth("12/23/2004");

        Object authLogin = authServices.register(user.toJson());
        Notification.show("Registration successful!");
        // Navigate to the Login page
        getUI().ifPresent(ui -> ui.navigate(LoginPage.class));
        // Check if the response is an instance of ResponseEntity (assuming it's used for handling HTTP responses)
        if (authLogin instanceof ResponseEntity<?>) {
            // Cast the response to ResponseEntity<String> to access status code
            ResponseEntity<String> responseEntity = (ResponseEntity<String>) authLogin;
            //<--Check the response status
            if (responseEntity.getStatusCode() == HttpStatus.OK) {
                Notification.show("Registration successful!");
                // Navigate to the Login page
                getUI().ifPresent(ui -> ui.navigate(LoginPage.class));
            } else {
                Notification.show("Registration failed. Please try again.");
            }
        }
    }

    private void showErrorMessage(String errorMessage) {
        Notification.show(errorMessage);
    }

    public class ValidationResult {
        private boolean isValid;
        private String errorMessage;

        public ValidationResult(boolean isValid, String errorMessage) {
            this.isValid = isValid;
            this.errorMessage = errorMessage;
        }

        public boolean isValid() {
            return isValid;
        }

        public String getErrorMessage() {
            return errorMessage;
        }
    }

    public RegisterForm.ValidationResult validateForm(String name,String email, String password) {
        // Trim input strings
        email = email.trim();
        password = password.trim();

        // Check for null or empty strings
        if (name.isEmpty() ||email.isEmpty() || password.isEmpty()) {
            return new RegisterForm.ValidationResult(false, "Email and password are required.");
        }

        // Email validation
        if (!isValidEmail(email)) {
            return new RegisterForm.ValidationResult(false, "Invalid email format.");
        }

        // Password validation
        if (password.length() < 8 || !containsSpecialCharacter(password)) {
            return new RegisterForm.ValidationResult(false, "Password must be at least 8 characters long and contain special characters.");
        }

        // If all validations pass, return success
        return new RegisterForm.ValidationResult(true, "Validation successful.");
    }

    private boolean isValidEmail(String email) {
        // Implement email validation logic (e.g., using regex)
        return email.matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    }

    private boolean containsSpecialCharacter(String password) {
        // Implement password validation logic (e.g., checking for special characters)
        return password.matches(".*[!@#$%^&*()\\-_=+\\\\|\\[{\\]};:'\\\",<.>/?].*");
    }
}

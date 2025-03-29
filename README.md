
# Testing StyleMate A E-commerce Website Using Manual Testing, Cypress(POM).
![](Stylemate images/web.png)

## Introduction 
The Tutorials StyleMate e-commerce platform offers a variety of features, including user registration, product browsing, cart management, and checkout. The testing focused on verifying the functionality, usability, and accessibility of these features across multiple devices and browsers.

## Objective

The goal of this testing project is to evaluate the **functionality, performance, and usability** of the **StyleMate** website hosted at https://luni-interface-029.vercel.app/. This testing ensures that the website works as expected, navigates smoothly, and provides a user-friendly experience.

## Project Type
Manual and Automated Testing

## Table of Contents

- [Test Plan Overview](#test-plan-overview)
- [Scope of Testing](#scope-of-testing)
- [Test Criteria](#test-criteria)
- [Test Strategy](#test-strategy)
- [Deliverables](#deliverables)
- [Resources Required](#resources-required)
- [Test Execution Summary](#test-execution-summary)
- [Recommendations and suggestions](#test-execution-summary)


## Test Plan Overview

**Objective:**  
To evaluate the functionality, performance, and usability of the StyleMate  website, ensuring the site operates smoothly across different browsers and devices.

**Scope:**  
The testing will focus on **Functional Testing** and **Usability Testing, Performance Testing, Security Testing, Compatibility Testing, and Automation Testing using Cypress(POM).**.

**Testing Areas:**  
- User Registration and Login 
- Login/Signup processes
- Search Functionality
- Cart Management
- Checkout Process
- Product Browsing and Display
- Mobile and Cross-browser Compatibility  
- Information display  
- Overall user experience  
- Accessibility
- Error Handling



**Tools Used:**  
- Browser Developer Tools
- Cypress
- Xmind  
- Google Docs/Sheets (for documentation)  
- Trello/Jira (for defect tracking)

**Testing Environment:**  
- Desktop and Mobile Browsers (Chrome, Firefox, Edge)


## Scope of Testing

### Functional Testing
Ensures the core features of the website work correctly:
- **Link Navigation**: Verifying all links lead to the correct pages and are not broken.
- **Login/Signup**: Validating both correct and incorrect login/signup scenarios for user authentication.
- **Product Browsing and Filtering:** Ensuring that products can be viewed and filtered accurately.
- **Cart Management:** Testing adding, removing, and updating items in the cart.
- **Checkout Process:** Verifying that the checkout flow functions smoothly, including payment and order confirmation.
- **Services Information Display**: Ensuring accurate and formatted service details.
- **Data Entry and Verification**: Testing form data entry and validation.

### Usability Testing
Focuses on the user’s ability to interact with the website:
- **Navigation Ease**: Testing whether the website’s navigation is intuitive.
- **Product Information Accessibility:** Ensuring text readability and visual clarity
- **Services Information Accessibility**: Ensuring text readability and visual clarity.
- **Responsive Design**: Verifying that the website adjusts across devices.
- **Browser Compatibility**: Ensuring consistent behavior across major browsers.

### Automation Testing
- Automating key test cases to ensure faster and consistent validations:
- User registration and login flows.
- Product search and filtering functionality.
- Cart operations.
- Checkout process validation.

## Test Criteria

### Pass Criteria:
- All functional test cases pass successfully.
- Usability testing yields positive feedback with no significant hindrances to user experience.
- Automated test scripts execute without errors.

### Fail Criteria:
- Critical interaction problems (e.g., toggle switch, slider).
- Functional failures (e.g., login/signup, checkout function not returning results ).



## Test Strategy

### Functional Testing:
1. **Verify Link Navigation**:  
   - Test all links across the homepage and internal pages to ensure correct redirection without 404 errors.
  
2. **Test Login/Signup Functionality**:  
   - Test login/signup with both valid and invalid credentials to ensure proper handling of all scenarios.

3. **Services Information Display**:  
   - Verify if service information such as images, descriptions, and prices are accurate and correctly displayed.

4. **Data Entry and Verification**:  
   - Add new data (such as filling out forms) and check if it is stored and displayed properly on the website.

5. **Checkout Process:**
- Validate that users can successfully complete the checkout process, including payment and order confirmation.  

### Usability Testing:
1. **Navigation Ease**:  
   - Evaluate if the website’s navigation is user-friendly. Are menus labeled clearly? Can users find content effortlessly?

2. **Services Information Accessibility**:  
   - Ensure service details are accessible and easy to read, focusing on text size, contrast, and font clarity.

3. **Responsive Design**:  
   - Verify that the website is responsive across mobile, tablet, and desktop devices, maintaining usability and consistency.

4. **Browser Compatibility**:  
   - Test the website’s performance across major browsers such as Chrome, Firefox, Edge, and Safari.

### Automation Testing:
  - Create reusable test scripts for critical workflows.
  - Implement the Page Object Model (POM) for maintainability.


## Deliverables

- **Test Cases**: Documented scenarios for both functional and usability testing.
- **Test Summary Report**: Overview of test results, including pass/fail statuses.
- **Bug Reports**: Detailed logs of any defects found during testing.
- **Feedback and Suggestions**: Recommendations to enhance the website’s usability and functionality.


## Resources Required

- **Hardware**: Devices (mobile, tablet, desktop) for testing.
- **Software**: Browsers (Chrome, Firefox, Edge, Safari), Cypress WebDriver, and Jira for defect tracking.
- **Access to Website**: Ensure testers have access to the site for performing the tests.


## Test Execution Summary

**Total Test Cases**: 59  
**Passed**: 26  
**Failed**: 33  
**Critical Bugs**: None  
**Minor Bugs**: 33  


## Recommendations  and Suggestions

1. **User Registration/Login:**  
  Enhance input validation and improve error messages for better user understanding and resolve create account issue.

2. **Product Browsing:**  
  Optimize the search and filtering logic to ensure accurate results.

3. **Cart Management:**:  
   Resolve intermittent issues with item removal and quantity updates resolve checkout button issue.
   
5. **Responsive Design:**
    Address inconsistencies in the mobile layout for smoother navigation.
   
6. **Personal Training**:  
   Investigate and resolve intermittent booking failures for certain time slots.


## Conclusion

The **StyleMate website** has undergone extensive testing for functionality, usability, and automation. Most core features passed the tests, although some minor bugs were identified, particularly in the User **Registration/Login, Product Browsing, Cart Management, and Checkout Process** modules. Addressing the identified issues will significantly enhance the user experience and functionality of the platform.

By following the recommendations outlined, **StyleMate** can ensure that its website meets the highest standards of usability, performance, and functionality.

---

## Feedback
If you have any feedback to give, please contact me at
Prajyotisuryawanshi639@gmail.com

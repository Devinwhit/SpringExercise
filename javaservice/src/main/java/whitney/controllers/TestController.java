package whitney.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import whitney.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import whitney.models.Foo;
import whitney.services.CustomerService;
import static org.apache.commons.lang3.RandomStringUtils.randomAlphabetic;
import static org.apache.commons.lang3.RandomStringUtils.randomNumeric;

@RestController
public class TestController {

    @Autowired
    private CustomerService customerService;

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/crm-oauth2/api/customers
     * HTTP method: GET
     *
     */
    @PreAuthorize("#oauth2.hasScope('read')")
    @RequestMapping(value="/api/customers", method = RequestMethod.GET)
    public ResponseEntity<?> getCustomers() {

        Iterable<Customer> customerList = customerService.getCustomers();
        return new ResponseEntity<>(customerList, HttpStatus.OK);
    }

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/crm-oauth2/api/customers/{customerId}
     * HTTP method: GET
     *
     */
    @RequestMapping(value="/customers/{customerId}", method = RequestMethod.GET)
    public ResponseEntity<?> getCustomer(@PathVariable long customerId) {
        Customer customer = customerService.getCustomer(customerId);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/crm-oauth2/api/customers
     * HTTP method: POST
     *
     */
    @RequestMapping(value="/customers", method = RequestMethod.POST)
    public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
        Customer newCustomer = customerService.addCustomer(customer);
        return new ResponseEntity<>(newCustomer, HttpStatus.CREATED);
    }

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/crm-oauth2/api/customers/customerId
     * HTTP method: PUT
     *
     */
    @RequestMapping(value = "/customers/{customerId}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateCustomer(@PathVariable long customerId,
                                            @RequestBody Customer customer) {
        Customer updatedCustomer = customerService.updateCustomer(customerId, customer);
        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
    }

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/crm-oauth2/api/customers/customerId
     * HTTP method: DELETE
     *
     */
    @RequestMapping(value = "/customers/{customerId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCustomer(@PathVariable long customerId) {
        Customer customer = customerService.getCustomer(customerId);
        customerService.deleteCustomer(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     *
     * this method maps the following URL & http method
     * URL: http://hostname:port/appName
     * HTTP method: GET
     *
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<?> home() {
        return new ResponseEntity<>("CRM REST API, JPA, Spring Security, and OAuth2", HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @RequestMapping(method = RequestMethod.GET, value = "/foos/{id}")
    @ResponseBody
    public Foo findById(@PathVariable long id) {
        return
                new Foo(Long.parseLong(randomNumeric(2)), randomAlphabetic(4));
    }

    @GetMapping("/whoami")
    public String whoami(@AuthenticationPrincipal(expression="username") String username) {
        return username;
    }




}

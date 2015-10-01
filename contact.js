/**
 * Description: This code contains Contact and ContacList structures. The
 * structure contains built in methods for contact manipulations.
 */

/**
 *
 * This is a constructor for Contact structure.
 * @param firstName,lastName,address,zipcode, number
 * @constructor
 */

/* globals _*/
/* exported Contact, ContactList*/

var Contact = function (firstName, lastName, address, zipcode, number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.number = number;
  this.counter = 0;
  this.call = function () {
    this.counter += 1;
    return true;
  };
  this.numCalls = function () {
    return this.counter;
  };

};

/**
 * This is a constructor to be used with Contact structure.
 * @constructor
 */

var ContactList = function () {
  this.list = [];

  /**
   * This method adds a given contact into an internal list.
   * @param contact
   */
  this.addContact = function (contact) {
    this.list.push(contact);
  }
  /**
   * This method returns number of contacts within a internal list.
   * @returns {Number}
   */
  this.numContacts = function () {
    return this.list.length;
  };
  /**
   * This method returns array of contacts with a given name.
   * @param name
   * @returns {Array}
   */
  this.findContact = function (name) {
    var contacts = [];
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].lastName === name)
        contacts[contacts.length] = this.list[i];
    }
    return contacts;
  };
  /**
   * This method deletes a contact within a the internal list given last name
   * and first name.
   * @param firstName, lastName
   */
  this.deleteContact = function (firstName, lastName) {
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].lastName === lastName && this.list[i].firstName === firstName) {
        this.list.splice(i, 1);
      }
    }
  };
  /**
   * This method returns String of contacts name sorted order by lastname
   * @returns {string}
   */
  this.listContacts = function () {
    var contacts = _.pluck(this.list, 'lastName');
    return (_.sortBy(contacts)).toString();

  };
}
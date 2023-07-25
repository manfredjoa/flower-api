# 🌻 Plants API 🌻

## Introduction

Welcome to my Plants API! I wanted to challenge myself for this project by creating my very own API, which in order from less specific to more specific classifications, contains 10 plant families, 26 plant genera, and 112 plant species.

Within this API, each of the species belong to a genus, which belongs to a family. For example the following photos of data show that you cannot find a plant species whose genus or family is not contained within the API.

<br>

![](<Screenshot 2023-07-25 at 4.01.22 PM.png>)
This shows that the species Pachystachys coccinea belongs to the Pachystachys genus.

---

<br>

![](<Screenshot 2023-07-25 at 4.00.11 PM.png>)
This shows that the Pachystachys genus belongs to the Acanthaceae family and contains the species Pachystachys coccinea.

---

<br>

![](<Screenshot 2023-07-25 at 3.59.03 PM.png>)
This shows that the Acanthaceae family contains the Pachystachys genus.

---

### How to Use

**_Please refer to the CRUD Functionality section to see more specific endpoints._**

It will help to have a browser extension such as [JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc) to parse the data into a readable json format.

To see all families:

```
https://manfredjoa-plants-api-56ca2fc58166.herokuapp.com/api/families
```

To see all genera:

```
https://manfredjoa-plants-api-56ca2fc58166.herokuapp.com/api/genera
```

To see all species:

```
https://manfredjoa-plants-api-56ca2fc58166.herokuapp.com/api/species
```

## Data Model

The database for this project is built using MongoDB and Mongoose, and contains three collections: "families", "genuses", and "species". "Genuses" is the less professional version of the scientific term "genera", which are both plural for genus, but I decided to use genuses as the name of the collection due to MongoDB pluralizing collection names. You can consider "genuses" and "genera" interchangeable within this API.

### Family Schema

| Field       | Type   | Description                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------------- |
| familyName  | String | The name of the family                                                            |
| derivation  | String | The derivation of the family name, typically greek or latin, or named by a person |
| meaning     | String | The meaning of the family name                                                    |
| orderName   | String | The name of the order (1 tier higher than family)                                 |
| uses        | Array  | An array of uses plants in the family possess                                     |
| description | String | A description of plants within the family                                         |
| genera      | Array  | An array of genera within the family (plural for genus and 1 tier below family)   |

### Genus Schema

| Field       | Type   | Description                                               |
| ----------- | ------ | --------------------------------------------------------- |
| genusName   | String | The name of the genus                                     |
| familyName  | String | The name of the family                                    |
| description | String | A descrition of plants within the genus                   |
| species     | Array  | An array of species within the genus (1 tier below genus) |

### Species Schema

| Field       | Type   | Description                                                            |
| ----------- | ------ | ---------------------------------------------------------------------- |
| speciesName | String | The name of the species                                                |
| commonName  | String | The non-scientific name of the species (some species may not have one) |
| genusName   | String | The name of the genus                                                  |
| image       | String | A link to an image of the species                                      |

## CRUD Functionality

### Families Endpoints

#### GET

- **_/api/families_** - Returns a list of all families
- **_/api/families/:familyName_** - Returns a family by familyName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/families/id/:id_** - Returns a family by id

#### POST

- **_/api/families/_** - Creates a new family

#### PUT

- **_/api/families/edit/:familyName_** - Updates a family by familyName

#### DELETE

- **_/api/families/delete/:familyName_** - Deletes a family by familyName

---

### Genera Endpoints

#### GET

- **_/api/genera_** - Returns a list of all genera
- **_/api/genera/:genusName_** - Returns a genus by genusName (first letter not case sensitive)
- **_/api/genera/id/:id_** - Returns a genus by id
- **_/api/genera/family/:familyName_** - Returns all genera belonging to the same familyName (first letter not case sensitive)

#### POST

- **_/api/genera/_** - Creates a new genus

#### PUT

- **_/api/genera/edit/:genusName_** - Updates a genus by genusName

#### DELETE

- **_/api/genera/delete/:genusName_** - Deletes a genus by genusName

---

### Species Endpoints

#### GET

- **_/api/species_** - Returns a list of all species
- **_/api/species/:speciesName_** - Returns a species by speciesName (first letter not case sensitive)
- **_/api/species/common-name/:commonName_** - Returns a species by commonName
- **_/api/species/id/:id_** - Returns a species by id
- **_/api/species/genus/:genusName_** - Returns all species belonging to the same genusName (first letter not case sensitive)

#### POST

- **_/api/species/_** - Creates a new species

#### PUT

- **_/api/species/edit/:speciesName_** - Updates a species by speciesName

#### DELETE

- **_/api/species/delete/:speciesName_** - Deletes a species by speciesName

## Installation

If you would like to use this API for your own project:

- Clone this repository
- Initialize npm in your terminal

```
npm init -y
```

- Seed data to locally create the plants database

```
npm run seed
```

- Start server

```
npm start
```

- To start server in development mode, use this instead

```
npm run dev
```

- The API can then be accessed using the following base url in combination with an endpoint

```
http://localhost:3000/api
```

## Next Steps

- Pagination
- Creating a function where when a species or genus is created, its name is also pushed into its parent's array that lists its genera or species. For example, if species Pachystachys somename is created, the data showing the Pachystachys genus will include Pachystachys somename in its array of species. If genus somegenus is created and belongs to the Acanthaceae family, the data showing the Acanthaceae family will include somegenus in its array of genera.
- Creating a function where you don't have to worry about case sensitivity for the whole entire word, not just the first letter. This is especially important for the species get request by common name, in which there is variance in the capitalization of the strings, whereas the family, genus, and species names are all consistent in that the first letter is capitalized. I am aware however, that this can all be avoided by just having the common name data seeded in a consistent format.

## Thoughts

I loved that I was able to take this project as an opportunity to build my own API and create data with a model nested within a model, nested within another model.

Being able to create a function to allow the user to not worry about capitalizing the first letter when searching by the family, genus, or species name was very satisfying.

## Resources

- [Wikipedia](https://www.wikipedia.org/)
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JSONVue](https://chrome.google.com/webstore/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Postman](https://www.postman.com/)

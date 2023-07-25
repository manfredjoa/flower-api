# 🌻 Plants API 🌻

## Introduction

Welcome to my Plants API! I wanted to challenge myself for this project by creating my very own API, which in order from less specific to more specific classifications, contains 10 plant families, 26 plant genera, and 112 plant species.

Within this API, each of the species belong to a genus, which belongs to a family. For example, you cannot find a plant species whose genus or family is not contained within the API. The species Pachystachys coccinea belongs to the genus of Pachystachys, which belongs to the Acanthaceae family.

### How to Use

Please refer to the CRUD Functionality section to see more specific endpoints.

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

<!-- ![Species name Pachystachys coccinea, with genus name Pachystachys](<Screenshot 2023-07-25 at 3.02.41 PM.png>)
![Genus name Pachystachys listing Pachystachys coccinea as one of its species, with family name Acanthaceae](<Screenshot 2023-07-25 at 3.02.05 PM.png>)
![Family name Acanthaceae listing Pachystachys as one of its genera](<Screenshot 2023-07-25 at 3.04.24 PM.png>) -->

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
- **_/api/genera/:genusName_** - Returns a genus by genusName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/genera/id/:id_** - Returns a genus by id

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
- **_/api/species/:speciesName_** - Returns a species by speciesName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/species/common-name/:commonName_** - Returns a species by commonName
- **_/api/species/id/:id_** - Returns a species by id

#### POST

- **_/api/species/_** - Creates a new species

#### PUT

- **_/api/species/edit/:speciesName_** - Updates a species by speciesName

#### DELETE

- **_/api/species/delete/:speciesName_** - Deletes a species by speciesName

## Installation

## Resources

````

```

```
````

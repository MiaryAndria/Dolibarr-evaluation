# 📘 Documentation Complète API Dolibarr

**Base URL:** `http://localhost/dolibarr/htdocs/api/index.php`

**Authentification:** Ajouter le header `DOLAPIKEY: <votre_token>` à chaque requête.

---

## 📑 Table des matières

- **[agendaevents](#agendaevents)** — Événements / Agenda (5 endpoints)
- **[categories](#categories)** — Catégories / Tags (11 endpoints)
- **[contacts](#contacts)** — Contacts / Adresses (10 endpoints)
- **[documents](#documents)** — Documents / GED (5 endpoints)
- **[emailtemplates](#emailtemplates)** — Modèles d'emails (8 endpoints)
- **[expensereports](#expensereports)** — Notes de frais (18 endpoints)
- **[holidays](#holidays)** — Congés (10 endpoints)
- **[login](#login)** — Authentification (2 endpoints)
- **[members](#members)** — Adhérents (21 endpoints)
- **[memberstypes](#memberstypes)** — Types d'adhérents (5 endpoints)
- **[objectlinks](#objectlinks)** — Liens entre objets (5 endpoints)
- **[orders](#orders)** — Commandes clients (23 endpoints)
- **[productlots](#productlots)** — Lots / Numéros de série (5 endpoints)
- **[products](#products)** — Produits / Services (44 endpoints)
- **[recruitments](#recruitments)** — Recrutement (10 endpoints)
- **[salaries](#salaries)** — Salaires / Paiements salaires (8 endpoints)
- **[setup](#setup)** — Configuration (50 endpoints)
- **[shipments](#shipments)** — Expéditions / Livraisons (8 endpoints)
- **[status](#status)** — État de l'API (1 endpoints)
- **[stockmovements](#stockmovements)** — Mouvements de stock (3 endpoints)
- **[subscriptions](#subscriptions)** — Abonnements / Cotisations (5 endpoints)
- **[supplierinvoices](#supplierinvoices)** — Factures fournisseurs (15 endpoints)
- **[supplierorders](#supplierorders)** — Commandes fournisseurs (13 endpoints)
- **[thirdparties](#thirdparties)** — Tiers (Clients, Fournisseurs) (42 endpoints)
- **[users](#users)** — Utilisateurs / Employés (22 endpoints)
- **[warehouses](#warehouses)** — Entrepôts (6 endpoints)

---

## agendaevents

**Événements / Agenda**

### 🔍 GET (Lecture)

#### `GET /agendaevents/{id}`

Get agenda event 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Agenda Event to get |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "type_id": "...",
  "type": "...",
  "type_code": "...",
  "type_label": "...",
  "type_color": "...",
  "type_picto": "...",
  "code": "...",
  "label": "...",
  "datec": "...",
  "duree": "...",
  "datem": "...",
  "author": "...",
  "usermod": "...",
  "authorid": "...",
  "usermodid": "...",
  "datep": "...",
  "datef": "...",
  "date_start_in_calendar": "...",
  "date_end_in_calendar": "...",
  "datep2": "...",
  "durationp": "...",
  "fulldayevent": "...",
  "ponctuel": "...",
  "percentage": "...",
  "location": "...",
  "transparency": "...",
  "priority": "...",
  "userassigned": "...",
  "userownerid": "...",
  "socpeopleassigned": "...",
  "otherassigned": "...",
  "reminders": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_task": "...",
  "societe": "...",
  "contact": "...",
  "elementid": "...",
  "elementtype": "...",
  "fk_bookcal_calendar": "...",
  "icalname": "...",
  "icalcolor": "...",
  "extraparams": "...",
  "actions": "...",
  "email_msgid": "...",
  "email_from": "...",
  "email_reply_to": "...",
  "email_sender": "...",
  "email_to": "...",
  "email_tocc": "...",
  "email_tobcc": "...",
  "email_subject": "...",
  "errors_to": "...",
  "num_vote": "...",
  "event_paid": "...",
  "status": "...",
  "ip": "...",
  "recurid": "...",
  "recurrule": "...",
  "recurdateend": "...",
  "calling_duration": "..."
}
```

#### `GET /agendaevents`

List agenda events 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `user_ids` | string | User ids filter field (owners of event). Example: '1' or '1,2,3' |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.label:like:'%dol%') and (t.datec:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /agendaevents?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "ref": "...",
    "type_id": "...",
    "type": "...",
    "type_code": "...",
    "type_label": "...",
    "type_color": "...",
    "type_picto": "...",
    "code": "...",
    "label": "...",
    "datec": "...",
    "duree": "...",
    "datem": "...",
    "author": "...",
    "usermod": "...",
    "authorid": "...",
    "usermodid": "...",
    "datep": "...",
    "datef": "...",
    "date_start_in_calendar": "...",
    "date_end_in_calendar": "...",
    "datep2": "...",
    "durationp": "...",
    "fulldayevent": "...",
    "ponctuel": "...",
    "percentage": "...",
    "location": "...",
    "transparency": "...",
    "priority": "...",
    "userassigned": "...",
    "userownerid": "...",
    "socpeopleassigned": "...",
    "otherassigned": "...",
    "reminders": "...",
    "socid": "...",
    "contact_id": "...",
    "fk_task": "...",
    "societe": "...",
    "contact": "...",
    "elementid": "...",
    "elementtype": "...",
    "fk_bookcal_calendar": "...",
    "icalname": "...",
    "icalcolor": "...",
    "extraparams": "...",
    "actions": "...",
    "email_msgid": "...",
    "email_from": "...",
    "email_reply_to": "...",
    "email_sender": "...",
    "email_to": "...",
    "email_tocc": "...",
    "email_tobcc": "...",
    "email_subject": "...",
    "errors_to": "...",
    "num_vote": "...",
    "event_paid": "...",
    "status": "...",
    "ip": "...",
    "recurid": "...",
    "recurrule": "...",
    "recurdateend": "...",
    "calling_duration": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /agendaevents`

Create an agenda event 🔐

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "type_id": "",
  "type": "",
  "type_code": "",
  "type_label": "",
  "type_color": "",
  "type_picto": "",
  "code": "",
  "label": "",
  "datec": "",
  "duree": "",
  "datem": "",
  "author": "",
  "usermod": "",
  "authorid": "",
  "usermodid": "",
  "datep": "",
  "datef": "",
  "date_start_in_calendar": "",
  "date_end_in_calendar": "",
  "datep2": "",
  "durationp": "",
  "fulldayevent": "",
  "ponctuel": "",
  "percentage": "",
  "location": "",
  "transparency": "",
  "priority": "",
  "userassigned": "",
  "userownerid": "",
  "socpeopleassigned": "",
  "otherassigned": "",
  "reminders": "",
  "socid": "",
  "contact_id": "",
  "fk_task": "",
  "societe": "",
  "contact": "",
  "elementid": "",
  "elementtype": "",
  "fk_bookcal_calendar": "",
  "icalname": "",
  "icalcolor": "",
  "extraparams": "",
  "actions": "",
  "email_msgid": "",
  "email_from": "",
  "email_reply_to": "",
  "email_sender": "",
  "email_to": "",
  "email_tocc": "",
  "email_tobcc": "",
  "email_subject": "",
  "errors_to": "",
  "num_vote": "",
  "event_paid": "",
  "status": "",
  "ip": "",
  "recurid": "",
  "recurrule": "",
  "recurdateend": "",
  "calling_duration": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /agendaevents/{id}`

Update an agenda event 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Agenda Event to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "type_id": "",
  "type": "",
  "type_code": "",
  "type_label": "",
  "type_color": "",
  "type_picto": "",
  "code": "",
  "label": "",
  "datec": "",
  "duree": "",
  "datem": "",
  "author": "",
  "usermod": "",
  "authorid": "",
  "usermodid": "",
  "datep": "",
  "datef": "",
  "date_start_in_calendar": "",
  "date_end_in_calendar": "",
  "datep2": "",
  "durationp": "",
  "fulldayevent": "",
  "ponctuel": "",
  "percentage": "",
  "location": "",
  "transparency": "",
  "priority": "",
  "userassigned": "",
  "userownerid": "",
  "socpeopleassigned": "",
  "otherassigned": "",
  "reminders": "",
  "socid": "",
  "contact_id": "",
  "fk_task": "",
  "societe": "",
  "contact": "",
  "elementid": "",
  "elementtype": "",
  "fk_bookcal_calendar": "",
  "icalname": "",
  "icalcolor": "",
  "extraparams": "",
  "actions": "",
  "email_msgid": "",
  "email_from": "",
  "email_reply_to": "",
  "email_sender": "",
  "email_to": "",
  "email_tocc": "",
  "email_tobcc": "",
  "email_subject": "",
  "errors_to": "",
  "num_vote": "",
  "event_paid": "",
  "status": "",
  "ip": "",
  "recurid": "",
  "recurrule": "",
  "recurdateend": "",
  "calling_duration": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /agendaevents/{id}`

Delete an agenda event 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Agenda Event to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `ref` |  |
| `type_id` |  |
| `type` |  |
| `type_code` |  |
| `type_label` |  |
| `type_color` |  |
| `type_picto` |  |
| `code` |  |
| `label` |  |
| `datec` |  |
| `duree` |  |
| `datem` |  |
| `author` |  |
| `usermod` |  |
| `authorid` |  |
| `usermodid` |  |
| `datep` |  |
| `datef` |  |
| `date_start_in_calendar` |  |
| `date_end_in_calendar` |  |
| `datep2` |  |
| `durationp` |  |
| `fulldayevent` |  |
| `ponctuel` |  |
| `percentage` |  |
| `location` |  |
| `transparency` |  |
| `priority` |  |
| `userassigned` |  |
| `userownerid` |  |
| `socpeopleassigned` |  |
| `otherassigned` |  |
| `reminders` |  |
| `socid` |  |
| `contact_id` |  |
| `fk_task` |  |
| `societe` |  |
| `contact` |  |
| `elementid` |  |
| `elementtype` |  |
| `fk_bookcal_calendar` |  |
| `icalname` |  |
| `icalcolor` |  |
| `extraparams` |  |
| `actions` |  |
| `email_msgid` |  |
| `email_from` |  |
| `email_reply_to` |  |
| `email_sender` |  |
| `email_to` |  |
| `email_tocc` |  |
| `email_tobcc` |  |
| `email_subject` |  |
| `errors_to` |  |
| `num_vote` |  |
| `event_paid` |  |
| `status` |  |
| `ip` |  |
| `recurid` |  |
| `recurrule` |  |
| `recurdateend` |  |
| `calling_duration` |  |

---

## categories

**Catégories / Tags**

### 🔍 GET (Lecture)

#### `GET /categories/{id}`

Get properties of a category object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `include_childs` | boolean | Include child categories list (true or false) |

**Exemple de réponse (JSON) :**

```json
{
  "MAP_ID": "...",
  "MAP_CAT_FK": "...",
  "MAP_CAT_TABLE": "...",
  "MAP_OBJ_CLASS": "...",
  "MAP_OBJ_TABLE": "...",
  "fk_parent": "...",
  "label": "...",
  "description": "...",
  "color": "...",
  "position": "...",
  "visible": "...",
  "socid": "...",
  "type": "...",
  "cats": "...",
  "motherof": "...",
  "childs": "...",
  "multilangs": "..."
}
```

#### `GET /categories`

List categories 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'actioncomm') |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /categories?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "MAP_ID": "...",
    "MAP_CAT_FK": "...",
    "MAP_CAT_TABLE": "...",
    "MAP_OBJ_CLASS": "...",
    "MAP_OBJ_TABLE": "...",
    "fk_parent": "...",
    "label": "...",
    "description": "...",
    "color": "...",
    "position": "...",
    "visible": "...",
    "socid": "...",
    "type": "...",
    "cats": "...",
    "motherof": "...",
    "childs": "...",
    "multilangs": "..."
  }
]
```

#### `GET /categories/object/{type}/{id}`

List categories of an object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Object ID |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'project', 'actioncomm') |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "MAP_ID": "...",
  "MAP_CAT_FK": "...",
  "MAP_CAT_TABLE": "...",
  "MAP_OBJ_CLASS": "...",
  "MAP_OBJ_TABLE": "...",
  "fk_parent": "...",
  "label": "...",
  "description": "...",
  "color": "...",
  "position": "...",
  "visible": "...",
  "socid": "...",
  "type": "...",
  "cats": "...",
  "motherof": "...",
  "childs": "...",
  "multilangs": "..."
}
```

#### `GET /categories/{id}/objects`

Get the list of objects in a category. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'project') |
| `onlyids` | integer | Return only ids of objects (consume less memory) |

**Exemple de réponse (JSON) :**

```json
{
  "MAP_ID": "...",
  "MAP_CAT_FK": "...",
  "MAP_CAT_TABLE": "...",
  "MAP_OBJ_CLASS": "...",
  "MAP_OBJ_TABLE": "...",
  "fk_parent": "...",
  "label": "...",
  "description": "...",
  "color": "...",
  "position": "...",
  "visible": "...",
  "socid": "...",
  "type": "...",
  "cats": "...",
  "motherof": "...",
  "childs": "...",
  "multilangs": "..."
}
```

### ✏️ POST (Création)

#### `POST /categories`

Create category object 🔐

**Body nécessaire (JSON) :**

```json
{
  "MAP_ID": "",
  "MAP_CAT_FK": "",
  "MAP_CAT_TABLE": "",
  "MAP_OBJ_CLASS": "",
  "MAP_OBJ_TABLE": "",
  "fk_parent": "",
  "label": "",
  "description": "",
  "color": "",
  "position": "",
  "visible": "",
  "socid": "",
  "type": "",
  "cats": "",
  "motherof": "",
  "childs": "",
  "multilangs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /categories/{id}/objects/{type}/{object_id}`

Link an object to a category by id 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'actioncomm') |
| `object_id` | integer | ID of object |

**Body nécessaire (JSON) :**

```json
{
  "MAP_ID": "",
  "MAP_CAT_FK": "",
  "MAP_CAT_TABLE": "",
  "MAP_OBJ_CLASS": "",
  "MAP_OBJ_TABLE": "",
  "fk_parent": "",
  "label": "",
  "description": "",
  "color": "",
  "position": "",
  "visible": "",
  "socid": "",
  "type": "",
  "cats": "",
  "motherof": "",
  "childs": "",
  "multilangs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /categories/{id}/objects/{type}/ref/{object_ref}`

Link an object to a category by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact') |
| `object_ref` | string | Reference of object (product, thirdparty, member, ...) |

**Body nécessaire (JSON) :**

```json
{
  "MAP_ID": "",
  "MAP_CAT_FK": "",
  "MAP_CAT_TABLE": "",
  "MAP_OBJ_CLASS": "",
  "MAP_OBJ_TABLE": "",
  "fk_parent": "",
  "label": "",
  "description": "",
  "color": "",
  "position": "",
  "visible": "",
  "socid": "",
  "type": "",
  "cats": "",
  "motherof": "",
  "childs": "",
  "multilangs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /categories/{id}`

Update category 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of category to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "MAP_ID": "",
  "MAP_CAT_FK": "",
  "MAP_CAT_TABLE": "",
  "MAP_OBJ_CLASS": "",
  "MAP_OBJ_TABLE": "",
  "fk_parent": "",
  "label": "",
  "description": "",
  "color": "",
  "position": "",
  "visible": "",
  "socid": "",
  "type": "",
  "cats": "",
  "motherof": "",
  "childs": "",
  "multilangs": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /categories/{id}`

Delete category 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Category ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /categories/{id}/objects/{type}/{object_id}`

Unlink an object from a category by id 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'actioncomm') |
| `object_id` | integer | ID of the object |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /categories/{id}/objects/{type}/ref/{object_ref}`

Unlink an object from a category by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of category |
| `type` | string | Type of category ('member', 'customer', 'supplier', 'product', 'contact', 'actioncomm') |
| `object_ref` | string | Reference of the object (product, thirdparty, member, ...) |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `MAP_ID` |  |
| `MAP_CAT_FK` |  |
| `MAP_CAT_TABLE` |  |
| `MAP_OBJ_CLASS` |  |
| `MAP_OBJ_TABLE` |  |
| `fk_parent` |  |
| `label` |  |
| `description` |  |
| `color` |  |
| `position` |  |
| `visible` |  |
| `socid` |  |
| `type` |  |
| `cats` |  |
| `motherof` |  |
| `childs` |  |
| `multilangs` |  |

---

## contacts

**Contacts / Adresses**

### 🔍 GET (Lecture)

#### `GET /contacts/{id}`

Get a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includecount` | integer | Include count of elements the contact is used as a link for |
| `includeroles` | integer | Includes roles of the contact |

**Exemple de réponse (JSON) :**

```json
{
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "gender": "...",
  "birthday_alert": "...",
  "civilite": "...",
  "fullname": "...",
  "name_alias": "...",
  "address": "...",
  "zip": "...",
  "town": "...",
  "state_id": "...",
  "state_code": "...",
  "state": "...",
  "poste": "...",
  "socid": "...",
  "fk_soc": "...",
  "socname": "...",
  "statut": "...",
  "code": "...",
  "email": "...",
  "mail": "...",
  "url": "...",
  "no_email": "...",
  "socialnetworks": "...",
  "photo": "...",
  "phone_pro": "...",
  "phone_perso": "...",
  "phone_mobile": "...",
  "fax": "...",
  "priv": "...",
  "birthday": "...",
  "default_lang": "...",
  "ref_facturation": "...",
  "ref_contrat": "...",
  "ref_commande": "...",
  "ref_propal": "...",
  "user_id": "...",
  "user_login": "...",
  "ip": "...",
  "roles": "...",
  "cacheprospectstatus": "...",
  "fk_prospectlevel": "...",
  "stcomm_id": "...",
  "statut_commercial": "...",
  "stcomm_picto": "..."
}
```

#### `GET /contacts/email/{email}`

Get a contact by Email 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `email` | string | Email of contact |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includecount` | integer | Include count of elements the contact is used as a link for |
| `includeroles` | integer | Includes roles of the contact |

**Exemple de réponse (JSON) :**

```json
{
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "gender": "...",
  "birthday_alert": "...",
  "civilite": "...",
  "fullname": "...",
  "name_alias": "...",
  "address": "...",
  "zip": "...",
  "town": "...",
  "state_id": "...",
  "state_code": "...",
  "state": "...",
  "poste": "...",
  "socid": "...",
  "fk_soc": "...",
  "socname": "...",
  "statut": "...",
  "code": "...",
  "email": "...",
  "mail": "...",
  "url": "...",
  "no_email": "...",
  "socialnetworks": "...",
  "photo": "...",
  "phone_pro": "...",
  "phone_perso": "...",
  "phone_mobile": "...",
  "fax": "...",
  "priv": "...",
  "birthday": "...",
  "default_lang": "...",
  "ref_facturation": "...",
  "ref_contrat": "...",
  "ref_commande": "...",
  "ref_propal": "...",
  "user_id": "...",
  "user_login": "...",
  "ip": "...",
  "roles": "...",
  "cacheprospectstatus": "...",
  "fk_prospectlevel": "...",
  "stcomm_id": "...",
  "statut_commercial": "...",
  "stcomm_picto": "..."
}
```

#### `GET /contacts`

List contacts 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `thirdparty_ids` | string | Third party ids to filter contacts of (example '1' or '1,2,3') |
| `category` | integer | Use this param to filter list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `includecount` | integer | Include count of elements the contact is used as a link for |
| `includeroles` | integer | Includes roles of the contact |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true, the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /contacts?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "gender": "...",
    "birthday_alert": "...",
    "civilite": "...",
    "fullname": "...",
    "name_alias": "...",
    "address": "...",
    "zip": "...",
    "town": "...",
    "state_id": "...",
    "state_code": "...",
    "state": "...",
    "poste": "...",
    "socid": "...",
    "fk_soc": "...",
    "socname": "...",
    "statut": "...",
    "code": "...",
    "email": "...",
    "mail": "...",
    "url": "...",
    "no_email": "...",
    "socialnetworks": "...",
    "photo": "...",
    "phone_pro": "...",
    "phone_perso": "...",
    "phone_mobile": "...",
    "fax": "...",
    "priv": "...",
    "birthday": "...",
    "default_lang": "...",
    "ref_facturation": "...",
    "ref_contrat": "...",
    "ref_commande": "...",
    "ref_propal": "...",
    "user_id": "...",
    "user_login": "...",
    "ip": "...",
    "roles": "...",
    "cacheprospectstatus": "...",
    "fk_prospectlevel": "...",
    "stcomm_id": "...",
    "statut_commercial": "...",
    "stcomm_picto": "..."
  }
]
```

#### `GET /contacts/{id}/categories`

Get categories of a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "gender": "...",
  "birthday_alert": "...",
  "civilite": "...",
  "fullname": "...",
  "name_alias": "...",
  "address": "...",
  "zip": "...",
  "town": "...",
  "state_id": "...",
  "state_code": "...",
  "state": "...",
  "poste": "...",
  "socid": "...",
  "fk_soc": "...",
  "socname": "...",
  "statut": "...",
  "code": "...",
  "email": "...",
  "mail": "...",
  "url": "...",
  "no_email": "...",
  "socialnetworks": "...",
  "photo": "...",
  "phone_pro": "...",
  "phone_perso": "...",
  "phone_mobile": "...",
  "fax": "...",
  "priv": "...",
  "birthday": "...",
  "default_lang": "...",
  "ref_facturation": "...",
  "ref_contrat": "...",
  "ref_commande": "...",
  "ref_propal": "...",
  "user_id": "...",
  "user_login": "...",
  "ip": "...",
  "roles": "...",
  "cacheprospectstatus": "...",
  "fk_prospectlevel": "...",
  "stcomm_id": "...",
  "statut_commercial": "...",
  "stcomm_picto": "..."
}
```

### ✏️ POST (Création)

#### `POST /contacts`

Create a contact 🔐

**Body nécessaire (JSON) :**

```json
{
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "gender": "",
  "birthday_alert": "",
  "civilite": "",
  "fullname": "",
  "name_alias": "",
  "address": "",
  "zip": "",
  "town": "",
  "state_id": "",
  "state_code": "",
  "state": "",
  "poste": "",
  "socid": "",
  "fk_soc": "",
  "socname": "",
  "statut": "",
  "code": "",
  "email": "",
  "mail": "",
  "url": "",
  "no_email": "",
  "socialnetworks": "",
  "photo": "",
  "phone_pro": "",
  "phone_perso": "",
  "phone_mobile": "",
  "fax": "",
  "priv": "",
  "birthday": "",
  "default_lang": "",
  "ref_facturation": "",
  "ref_contrat": "",
  "ref_commande": "",
  "ref_propal": "",
  "user_id": "",
  "user_login": "",
  "ip": "",
  "roles": "",
  "cacheprospectstatus": "",
  "fk_prospectlevel": "",
  "stcomm_id": "",
  "statut_commercial": "",
  "stcomm_picto": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`

**Réponse :** `int` — ID de l'objet créé.

#### `POST /contacts/{id}/createUser`

Create a user account object from contact (external user) 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact |

**Body nécessaire (JSON) :**

```json
{
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "gender": "",
  "birthday_alert": "",
  "civilite": "",
  "fullname": "",
  "name_alias": "",
  "address": "",
  "zip": "",
  "town": "",
  "state_id": "",
  "state_code": "",
  "state": "",
  "poste": "",
  "socid": "",
  "fk_soc": "",
  "socname": "",
  "statut": "",
  "code": "",
  "email": "",
  "mail": "",
  "url": "",
  "no_email": "",
  "socialnetworks": "",
  "photo": "",
  "phone_pro": "",
  "phone_perso": "",
  "phone_mobile": "",
  "fax": "",
  "priv": "",
  "birthday": "",
  "default_lang": "",
  "ref_facturation": "",
  "ref_contrat": "",
  "ref_commande": "",
  "ref_propal": "",
  "user_id": "",
  "user_login": "",
  "ip": "",
  "roles": "",
  "cacheprospectstatus": "",
  "fk_prospectlevel": "",
  "stcomm_id": "",
  "statut_commercial": "",
  "stcomm_picto": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /contacts/{id}`

Update a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "gender": "",
  "birthday_alert": "",
  "civilite": "",
  "fullname": "",
  "name_alias": "",
  "address": "",
  "zip": "",
  "town": "",
  "state_id": "",
  "state_code": "",
  "state": "",
  "poste": "",
  "socid": "",
  "fk_soc": "",
  "socname": "",
  "statut": "",
  "code": "",
  "email": "",
  "mail": "",
  "url": "",
  "no_email": "",
  "socialnetworks": "",
  "photo": "",
  "phone_pro": "",
  "phone_perso": "",
  "phone_mobile": "",
  "fax": "",
  "priv": "",
  "birthday": "",
  "default_lang": "",
  "ref_facturation": "",
  "ref_contrat": "",
  "ref_commande": "",
  "ref_propal": "",
  "user_id": "",
  "user_login": "",
  "ip": "",
  "roles": "",
  "cacheprospectstatus": "",
  "fk_prospectlevel": "",
  "stcomm_id": "",
  "statut_commercial": "",
  "stcomm_picto": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /contacts/{id}/categories/{category_id}`

Add a category to a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact |
| `category_id` | integer | ID of category |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "gender": "",
  "birthday_alert": "",
  "civilite": "",
  "fullname": "",
  "name_alias": "",
  "address": "",
  "zip": "",
  "town": "",
  "state_id": "",
  "state_code": "",
  "state": "",
  "poste": "",
  "socid": "",
  "fk_soc": "",
  "socname": "",
  "statut": "",
  "code": "",
  "email": "",
  "mail": "",
  "url": "",
  "no_email": "",
  "socialnetworks": "",
  "photo": "",
  "phone_pro": "",
  "phone_perso": "",
  "phone_mobile": "",
  "fax": "",
  "priv": "",
  "birthday": "",
  "default_lang": "",
  "ref_facturation": "",
  "ref_contrat": "",
  "ref_commande": "",
  "ref_propal": "",
  "user_id": "",
  "user_login": "",
  "ip": "",
  "roles": "",
  "cacheprospectstatus": "",
  "fk_prospectlevel": "",
  "stcomm_id": "",
  "statut_commercial": "",
  "stcomm_picto": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /contacts/{id}`

Delete a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Contact ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /contacts/{id}/categories/{category_id}`

Remove the link between a category and a contact 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of contact |
| `category_id` | integer | ID of category |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `civility_id` |  |
| `civility_code` |  |
| `civility` |  |
| `gender` |  |
| `birthday_alert` |  |
| `civilite` |  |
| `fullname` |  |
| `name_alias` |  |
| `address` |  |
| `zip` |  |
| `town` |  |
| `state_id` |  |
| `state_code` |  |
| `state` |  |
| `poste` |  |
| `socid` |  |
| `fk_soc` |  |
| `socname` |  |
| `statut` |  |
| `code` |  |
| `email` |  |
| `mail` |  |
| `url` |  |
| `no_email` |  |
| `socialnetworks` |  |
| `photo` |  |
| `phone_pro` |  |
| `phone_perso` |  |
| `phone_mobile` |  |
| `fax` |  |
| `priv` |  |
| `birthday` |  |
| `default_lang` |  |
| `ref_facturation` |  |
| `ref_contrat` |  |
| `ref_commande` |  |
| `ref_propal` |  |
| `user_id` |  |
| `user_login` |  |
| `ip` |  |
| `roles` |  |
| `cacheprospectstatus` |  |
| `fk_prospectlevel` |  |
| `stcomm_id` |  |
| `statut_commercial` |  |
| `stcomm_picto` |  |

---

## documents

**Documents / GED**

### 🔍 GET (Lecture)

#### `GET /documents/download`

Download a document 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `modulepart` | string | Name of module or area concerned by file download ('facture', ...) |
| `original_file` | string | Relative path with filename, relative to modulepart (for example: IN201701-999/IN201701-999.pdf) |

**Exemple d'URL avec filtres :**
`GET /documents?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /documents`

List documents of an element 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `modulepart` | string | Name of module or area concerned ('thirdparty', 'member', 'proposal', 'order', 'invoice', 'supplier_invoice', 'shipment', 'project', 'project_task', ...) |
| `id` | integer | ID of element |
| `ref` | string | Ref of element |
| `sortfield` | string | Sort criteria ('','fullname','relativename','name','date','size') |
| `sortorder` | string | Sort order ('asc' or 'desc') |
| `limit` | integer | List limit |
| `page` | integer | Page number |
| `content_type` | string | Filter on content-type (example 'application/pdf' or 'application/pdf,image/jpeg')) |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /documents?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

### ✏️ POST (Création)

#### `POST /documents/upload`

Upload a document 🔐

**Body nécessaire (JSON) :** Voir documentation Swagger.

**Réponse :** ID ou objet créé.

### 🔄 PUT (Modification)

#### `PUT /documents/builddoc`

Build a document 🔐

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /documents`

Delete a document 🔐

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

---

## emailtemplates

**Modèles d'emails**

### 🔍 GET (Lecture)

#### `GET /emailtemplates/{id}`

Get properties of a email template by id 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of email template |

**Réponse :** Objet JSON.

#### `GET /emailtemplates/label/{label}`

Get properties of an email template by label 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `label` | string | Label of object |

**Réponse :** Objet JSON.

#### `GET /emailtemplates`

List email templates 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `fk_user` | string | User ids to filter email templates of (example '1' or '1,2,3') |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(e.active:=:1) and (e.module:=:'adherent')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /emailtemplates?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

### ✏️ POST (Création)

#### `POST /emailtemplates`

Create an email template 🔐

**Body nécessaire (JSON) :** Voir documentation Swagger.

**Réponse :** ID ou objet créé.

### 🔄 PUT (Modification)

#### `PUT /emailtemplates/{id}`

Update an email template 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

#### `PUT /emailtemplates/label/{label}`

Update an email template 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `label` | string | Label of order to update |

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /emailtemplates/{id}`

Delete an email template 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | email template ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /emailtemplates/label/{label}`

Delete an email template 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `label` | string | email template label |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

---

## expensereports

**Notes de frais**

### 🔍 GET (Lecture)

#### `GET /expensereports/{id}`

Get an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Expense Report |

**Exemple de réponse (JSON) :**

```json
{
  "line": "...",
  "date_debut": "...",
  "date_fin": "...",
  "date_approbation": "...",
  "fk_user": "...",
  "user_approve_id": "...",
  "status": "...",
  "fk_statut": "...",
  "fk_c_paiement": "...",
  "modepaymentid": "...",
  "paid": "...",
  "user_paid_infos": "...",
  "user_author_infos": "...",
  "user_validator_infos": "...",
  "rule_warning_message": "...",
  "date_create": "...",
  "fk_user_creat": "...",
  "fk_user_author": "...",
  "date_modif": "...",
  "fk_user_modif": "...",
  "date_refuse": "...",
  "detail_refuse": "...",
  "fk_user_refuse": "...",
  "date_cancel": "...",
  "detail_cancel": "...",
  "fk_user_cancel": "...",
  "fk_user_validator": "...",
  "datevalid": "...",
  "date_valid": "...",
  "fk_user_valid": "...",
  "user_valid_infos": "...",
  "date_approve": "...",
  "fk_user_approve": "...",
  "localtax1": "...",
  "localtax2": "..."
}
```

#### `GET /expensereports`

List expense reports 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |
| `user_ids` | string | User ids filter field. Example: '1' or '1,2,3' |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /expensereports?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "line": "...",
    "date_debut": "...",
    "date_fin": "...",
    "date_approbation": "...",
    "fk_user": "...",
    "user_approve_id": "...",
    "status": "...",
    "fk_statut": "...",
    "fk_c_paiement": "...",
    "modepaymentid": "...",
    "paid": "...",
    "user_paid_infos": "...",
    "user_author_infos": "...",
    "user_validator_infos": "...",
    "rule_warning_message": "...",
    "date_create": "...",
    "fk_user_creat": "...",
    "fk_user_author": "...",
    "date_modif": "...",
    "fk_user_modif": "...",
    "date_refuse": "...",
    "detail_refuse": "...",
    "fk_user_refuse": "...",
    "date_cancel": "...",
    "detail_cancel": "...",
    "fk_user_cancel": "...",
    "fk_user_validator": "...",
    "datevalid": "...",
    "date_valid": "...",
    "fk_user_valid": "...",
    "user_valid_infos": "...",
    "date_approve": "...",
    "fk_user_approve": "...",
    "localtax1": "...",
    "localtax2": "..."
  }
]
```

#### `GET /expensereports/{id}/lines`

Get lines of an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the expense report |

**Exemple de réponse (JSON) :**

```json
{
  "line": "...",
  "date_debut": "...",
  "date_fin": "...",
  "date_approbation": "...",
  "fk_user": "...",
  "user_approve_id": "...",
  "status": "...",
  "fk_statut": "...",
  "fk_c_paiement": "...",
  "modepaymentid": "...",
  "paid": "...",
  "user_paid_infos": "...",
  "user_author_infos": "...",
  "user_validator_infos": "...",
  "rule_warning_message": "...",
  "date_create": "...",
  "fk_user_creat": "...",
  "fk_user_author": "...",
  "date_modif": "...",
  "fk_user_modif": "...",
  "date_refuse": "...",
  "detail_refuse": "...",
  "fk_user_refuse": "...",
  "date_cancel": "...",
  "detail_cancel": "...",
  "fk_user_cancel": "...",
  "fk_user_validator": "...",
  "datevalid": "...",
  "date_valid": "...",
  "fk_user_valid": "...",
  "user_valid_infos": "...",
  "date_approve": "...",
  "fk_user_approve": "...",
  "localtax1": "...",
  "localtax2": "..."
}
```

#### `GET /expensereports/payments`

Get the list of payments of an expense report 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |

**Exemple d'URL avec filtres :**
`GET /expensereports?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "line": "...",
    "date_debut": "...",
    "date_fin": "...",
    "date_approbation": "...",
    "fk_user": "...",
    "user_approve_id": "...",
    "status": "...",
    "fk_statut": "...",
    "fk_c_paiement": "...",
    "modepaymentid": "...",
    "paid": "...",
    "user_paid_infos": "...",
    "user_author_infos": "...",
    "user_validator_infos": "...",
    "rule_warning_message": "...",
    "date_create": "...",
    "fk_user_creat": "...",
    "fk_user_author": "...",
    "date_modif": "...",
    "fk_user_modif": "...",
    "date_refuse": "...",
    "detail_refuse": "...",
    "fk_user_refuse": "...",
    "date_cancel": "...",
    "detail_cancel": "...",
    "fk_user_cancel": "...",
    "fk_user_validator": "...",
    "datevalid": "...",
    "date_valid": "...",
    "fk_user_valid": "...",
    "user_valid_infos": "...",
    "date_approve": "...",
    "fk_user_approve": "...",
    "localtax1": "...",
    "localtax2": "..."
  }
]
```

#### `GET /expensereports/payments/{pid}`

Get an expense report payment 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `pid` | integer | Payment ID |

**Exemple de réponse (JSON) :**

```json
{
  "line": "...",
  "date_debut": "...",
  "date_fin": "...",
  "date_approbation": "...",
  "fk_user": "...",
  "user_approve_id": "...",
  "status": "...",
  "fk_statut": "...",
  "fk_c_paiement": "...",
  "modepaymentid": "...",
  "paid": "...",
  "user_paid_infos": "...",
  "user_author_infos": "...",
  "user_validator_infos": "...",
  "rule_warning_message": "...",
  "date_create": "...",
  "fk_user_creat": "...",
  "fk_user_author": "...",
  "date_modif": "...",
  "fk_user_modif": "...",
  "date_refuse": "...",
  "detail_refuse": "...",
  "fk_user_refuse": "...",
  "date_cancel": "...",
  "detail_cancel": "...",
  "fk_user_cancel": "...",
  "fk_user_validator": "...",
  "datevalid": "...",
  "date_valid": "...",
  "fk_user_valid": "...",
  "user_valid_infos": "...",
  "date_approve": "...",
  "fk_user_approve": "...",
  "localtax1": "...",
  "localtax2": "..."
}
```

### ✏️ POST (Création)

#### `POST /expensereports`

Create an expense report 🔐

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/line`

Add a line to an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the expense report to update |

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/settodraft`

Set an expense report to draft 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expense report ID |

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/validate`

Validate an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expense report ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /expensereports/{id}/approve`

Approve an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expense report ID |

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/deny`

Deny an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expense report ID |

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/cancel`

Cancel an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the expense report |

**Body nécessaire (JSON) :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /expensereports/{id}/payments`

Create a payment for an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of an expense report |

**Body nécessaire (JSON) :**

```json
{
  "datepaye": 1709856000,       // Date du paiement (timestamp Unix)
  "paiementtype": "VIR",         // Mode: VIR (virement), CHQ (chèque), CB, LIQ, etc.
  "chid": 5,                     // ID du salaire / facture à payer
  "amounts": { "5": 1500.00 },   // { "ID_salaire": montant_payé }
  "accountid": 1,                 // ID du compte bancaire (OBLIGATOIRE)
  "num_payment": "",              // Numéro de paiement (optionnel)
  "comment": ""                   // Commentaire (optionnel)
}
```

**Réponse :** `int` — ID du paiement créé.

### 🔄 PUT (Modification)

#### `PUT /expensereports/{id}`

Update expense report general fields 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Expense Report to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /expensereports/{id}/lines/{lineid}`

Update a line of an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the expense report |
| `lineid` | integer | ID of the line to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "line": "",
  "date_debut": "",
  "date_fin": "",
  "date_approbation": "",
  "fk_user": "",
  "user_approve_id": "",
  "status": "",
  "fk_statut": "",
  "fk_c_paiement": "",
  "modepaymentid": "",
  "paid": "",
  "user_paid_infos": "",
  "user_author_infos": "",
  "user_validator_infos": "",
  "rule_warning_message": "",
  "date_create": "",
  "fk_user_creat": "",
  "fk_user_author": "",
  "date_modif": "",
  "fk_user_modif": "",
  "date_refuse": "",
  "detail_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "detail_cancel": "",
  "fk_user_cancel": "",
  "fk_user_validator": "",
  "datevalid": "",
  "date_valid": "",
  "fk_user_valid": "",
  "user_valid_infos": "",
  "date_approve": "",
  "fk_user_approve": "",
  "localtax1": "",
  "localtax2": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /expensereports/{id}/payments`

Update a payment of an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of paymentExpenseReport |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "datepaye": 1709856000,
  "paiementtype": "VIR",
  "amounts": { "5": 2000.00 },
  "accountid": 1
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /expensereports/{id}`

Delete expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expense Report ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /expensereports/{id}/lines/{lineid}`

Delete a line from an expense report 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the expense report to update |
| `lineid` | integer | ID of line to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `line` |  |
| `date_debut` |  |
| `date_fin` |  |
| `date_approbation` |  |
| `fk_user` |  |
| `user_approve_id` |  |
| `status` |  |
| `fk_statut` |  |
| `fk_c_paiement` |  |
| `modepaymentid` |  |
| `paid` |  |
| `user_paid_infos` |  |
| `user_author_infos` |  |
| `user_validator_infos` |  |
| `rule_warning_message` |  |
| `date_create` |  |
| `fk_user_creat` |  |
| `fk_user_author` |  |
| `date_modif` |  |
| `fk_user_modif` |  |
| `date_refuse` |  |
| `detail_refuse` |  |
| `fk_user_refuse` |  |
| `date_cancel` |  |
| `detail_cancel` |  |
| `fk_user_cancel` |  |
| `fk_user_validator` |  |
| `datevalid` |  |
| `date_valid` |  |
| `fk_user_valid` |  |
| `user_valid_infos` |  |
| `date_approve` |  |
| `fk_user_approve` |  |
| `localtax1` |  |
| `localtax2` |  |

---

## holidays

**Congés**

### 🔍 GET (Lecture)

#### `GET /holidays/{id}`

Get a leave 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Leave |

**Exemple de réponse (JSON) :**

```json
{
  "fk_user": "...",
  "date_create": "...",
  "description": "...",
  "date_debut": "...",
  "date_fin": "...",
  "date_debut_gmt": "...",
  "date_fin_gmt": "...",
  "halfday": "...",
  "statut": "...",
  "fk_validator": "...",
  "date_valid": "...",
  "fk_user_valid": "...",
  "date_approval": "...",
  "fk_user_approve": "...",
  "date_refuse": "...",
  "fk_user_refuse": "...",
  "date_cancel": "...",
  "fk_user_cancel": "...",
  "fk_user_create": "...",
  "detail_refuse": "...",
  "fk_type": "...",
  "holiday": "...",
  "events": "...",
  "logs": "..."
}
```

#### `GET /holidays`

List leaves 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |
| `user_ids` | string | User ids filter field. Example: '1' or '1,2,3' |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /holidays?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "fk_user": "...",
    "date_create": "...",
    "description": "...",
    "date_debut": "...",
    "date_fin": "...",
    "date_debut_gmt": "...",
    "date_fin_gmt": "...",
    "halfday": "...",
    "statut": "...",
    "fk_validator": "...",
    "date_valid": "...",
    "fk_user_valid": "...",
    "date_approval": "...",
    "fk_user_approve": "...",
    "date_refuse": "...",
    "fk_user_refuse": "...",
    "date_cancel": "...",
    "fk_user_cancel": "...",
    "fk_user_create": "...",
    "detail_refuse": "...",
    "fk_type": "...",
    "holiday": "...",
    "events": "...",
    "logs": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /holidays`

Create a leave 🔐

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /holidays/{id}/validate`

Validate a holiday 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Leave report ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /holidays/{id}/approve`

Approve a leave 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Leave ID |

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /holidays/{id}/cancel`

Cancel a holiday 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Holiday ID |

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /holidays/{id}/refuse`

Refuse a holiday 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Holiday ID |

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /holidays/{id}/reopen`

Reopen a canceled holiday 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Holiday ID |

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /holidays/{id}`

Update expense report general fields 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Leave ID to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fk_user": "",
  "date_create": "",
  "description": "",
  "date_debut": "",
  "date_fin": "",
  "date_debut_gmt": "",
  "date_fin_gmt": "",
  "halfday": "",
  "statut": "",
  "fk_validator": "",
  "date_valid": "",
  "fk_user_valid": "",
  "date_approval": "",
  "fk_user_approve": "",
  "date_refuse": "",
  "fk_user_refuse": "",
  "date_cancel": "",
  "fk_user_cancel": "",
  "fk_user_create": "",
  "detail_refuse": "",
  "fk_type": "",
  "holiday": "",
  "events": "",
  "logs": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /holidays/{id}`

Delete holiday 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Leave Report ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `fk_user` |  |
| `date_create` |  |
| `description` |  |
| `date_debut` |  |
| `date_fin` |  |
| `date_debut_gmt` |  |
| `date_fin_gmt` |  |
| `halfday` |  |
| `statut` |  |
| `fk_validator` |  |
| `date_valid` |  |
| `fk_user_valid` |  |
| `date_approval` |  |
| `fk_user_approve` |  |
| `date_refuse` |  |
| `fk_user_refuse` |  |
| `date_cancel` |  |
| `fk_user_cancel` |  |
| `fk_user_create` |  |
| `detail_refuse` |  |
| `fk_type` |  |
| `holiday` |  |
| `events` |  |
| `logs` |  |

---

## login

**Authentification**

### 🔍 GET (Lecture)

#### `GET /login`

Login 🔓

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `login` | string | User login |
| `password` | string | User password |
| `entity` | string | Entity (when multicompany module is used). '' means 1=first company. |
| `reset` | integer | Reset token (0=get current token, 1=ask a new token and canceled old token. This means access using current existing API token of user will fails: new token will be required for new access) |

**Exemple d'URL avec filtres :**
`GET /login?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

### ✏️ POST (Création)

#### `POST /login`

Login 🔓

**Body nécessaire (JSON) :** Voir documentation Swagger.

**Réponse :** ID ou objet créé.

---

## members

**Adhérents**

### 🔍 GET (Lecture)

#### `GET /members/{id}`

Get properties of a member object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/thirdparty/{thirdparty}`

Get properties of a member object by linked thirdparty 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `thirdparty` | integer | ID of third party |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/thirdparty/accounts/{site}/{key_account}`

Get properties of a member object by linked thirdparty account 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `site` | string | Site key |
| `key_account` | string | Key of account |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/thirdparty/email/{email}`

Get properties of a member object by linked thirdparty email 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `email` | string | Email of third party |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/thirdparty/barcode/{barcode}`

Get properties of a member object by linked thirdparty barcode 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `barcode` | string | Barcode of third party |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members`

List members 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `typeid` | string | ID of the type of member |
| `category` | integer | Use this param to filter list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Example: "(t.ref:like:'SO-%') and ((t.date_creation:<:'20160101') or (t.nature:is:NULL))" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

#### `GET /members/{id}/subscriptions`

List subscriptions of a member 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/{id}/categories`

Get categories for a member 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/types/{id}`

Get properties of a member type object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member type |

**Exemple de réponse (JSON) :**

```json
{
  "mesgs": "...",
  "login": "...",
  "pass": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "fullname": "...",
  "civility_id": "...",
  "civility_code": "...",
  "civility": "...",
  "societe": "...",
  "company": "...",
  "fk_soc": "...",
  "socid": "...",
  "socialnetworks": "...",
  "phone": "...",
  "phone_perso": "...",
  "phone_pro": "...",
  "phone_mobile": "...",
  "fax": "...",
  "poste": "...",
  "morphy": "...",
  "public": "...",
  "default_lang": "...",
  "photo": "...",
  "datec": "...",
  "datem": "...",
  "datevalid": "...",
  "gender": "...",
  "birth": "...",
  "typeid": "...",
  "type": "...",
  "need_subscription": "...",
  "user_id": "...",
  "user_login": "...",
  "datefin": "...",
  "first_subscription_date": "...",
  "first_subscription_date_start": "...",
  "first_subscription_date_end": "...",
  "first_subscription_amount": "...",
  "last_subscription_date": "...",
  "last_subscription_date_start": "...",
  "last_subscription_date_end": "...",
  "last_subscription_amount": "...",
  "subscriptions": "...",
  "ip": "...",
  "partnerships": "...",
  "invoice": "..."
}
```

#### `GET /members/types`

List members types 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.libelle:like:'SO-%') and (t.subscription:=:'1')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

#### `GET /members/stats/nbbymonth`

Return an array with the number of members by month for a given year 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `year` | integer | Year |
| `format` | integer | 0=Label of abscissa is a translated text 1=Label of abscissa is month number 2=Label of abscissa is first letter of month |

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

#### `GET /members/stats/nbbyyear`

Return an array with the number of subscriptions by year 🔐

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

#### `GET /members/stats/amountbymonth`

Return the number of subscriptions by month for a given year 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `year` | integer | Year |
| `format` | integer | 0=Label of abscissa is a translated text, 1=Label of abscissa is month number, 2=Label of abscissa is first letter of month |

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

#### `GET /members/stats/lastmodifiedmembers`

Last Modified Members 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `max` | integer | Max numbers of members |

**Exemple d'URL avec filtres :**
`GET /members?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "mesgs": "...",
    "login": "...",
    "pass": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "fullname": "...",
    "civility_id": "...",
    "civility_code": "...",
    "civility": "...",
    "societe": "...",
    "company": "...",
    "fk_soc": "...",
    "socid": "...",
    "socialnetworks": "...",
    "phone": "...",
    "phone_perso": "...",
    "phone_pro": "...",
    "phone_mobile": "...",
    "fax": "...",
    "poste": "...",
    "morphy": "...",
    "public": "...",
    "default_lang": "...",
    "photo": "...",
    "datec": "...",
    "datem": "...",
    "datevalid": "...",
    "gender": "...",
    "birth": "...",
    "typeid": "...",
    "type": "...",
    "need_subscription": "...",
    "user_id": "...",
    "user_login": "...",
    "datefin": "...",
    "first_subscription_date": "...",
    "first_subscription_date_start": "...",
    "first_subscription_date_end": "...",
    "first_subscription_amount": "...",
    "last_subscription_date": "...",
    "last_subscription_date_start": "...",
    "last_subscription_date_end": "...",
    "last_subscription_amount": "...",
    "subscriptions": "...",
    "ip": "...",
    "partnerships": "...",
    "invoice": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /members`

Create member object 🔐

**Body nécessaire (JSON) :**

```json
{
  "mesgs": "",
  "login": "",
  "pass": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "fullname": "",
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "societe": "",
  "company": "",
  "fk_soc": "",
  "socid": "",
  "socialnetworks": "",
  "phone": "",
  "phone_perso": "",
  "phone_pro": "",
  "phone_mobile": "",
  "fax": "",
  "poste": "",
  "morphy": "",
  "public": "",
  "default_lang": "",
  "photo": "",
  "datec": "",
  "datem": "",
  "datevalid": "",
  "gender": "",
  "birth": "",
  "typeid": "",
  "type": "",
  "need_subscription": "",
  "user_id": "",
  "user_login": "",
  "datefin": "",
  "first_subscription_date": "",
  "first_subscription_date_start": "",
  "first_subscription_date_end": "",
  "first_subscription_amount": "",
  "last_subscription_date": "",
  "last_subscription_date_start": "",
  "last_subscription_date_end": "",
  "last_subscription_amount": "",
  "subscriptions": "",
  "ip": "",
  "partnerships": "",
  "invoice": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /members/{id}/subscriptions`

Add a subscription for a member 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member |

**Body nécessaire (JSON) :**

```json
{
  "mesgs": "",
  "login": "",
  "pass": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "fullname": "",
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "societe": "",
  "company": "",
  "fk_soc": "",
  "socid": "",
  "socialnetworks": "",
  "phone": "",
  "phone_perso": "",
  "phone_pro": "",
  "phone_mobile": "",
  "fax": "",
  "poste": "",
  "morphy": "",
  "public": "",
  "default_lang": "",
  "photo": "",
  "datec": "",
  "datem": "",
  "datevalid": "",
  "gender": "",
  "birth": "",
  "typeid": "",
  "type": "",
  "need_subscription": "",
  "user_id": "",
  "user_login": "",
  "datefin": "",
  "first_subscription_date": "",
  "first_subscription_date_start": "",
  "first_subscription_date_end": "",
  "first_subscription_amount": "",
  "last_subscription_date": "",
  "last_subscription_date_start": "",
  "last_subscription_date_end": "",
  "last_subscription_amount": "",
  "subscriptions": "",
  "ip": "",
  "partnerships": "",
  "invoice": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /members/types`

Create member type object 🔐

**Body nécessaire (JSON) :**

```json
{
  "mesgs": "",
  "login": "",
  "pass": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "fullname": "",
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "societe": "",
  "company": "",
  "fk_soc": "",
  "socid": "",
  "socialnetworks": "",
  "phone": "",
  "phone_perso": "",
  "phone_pro": "",
  "phone_mobile": "",
  "fax": "",
  "poste": "",
  "morphy": "",
  "public": "",
  "default_lang": "",
  "photo": "",
  "datec": "",
  "datem": "",
  "datevalid": "",
  "gender": "",
  "birth": "",
  "typeid": "",
  "type": "",
  "need_subscription": "",
  "user_id": "",
  "user_login": "",
  "datefin": "",
  "first_subscription_date": "",
  "first_subscription_date_start": "",
  "first_subscription_date_end": "",
  "first_subscription_amount": "",
  "last_subscription_date": "",
  "last_subscription_date_start": "",
  "last_subscription_date_end": "",
  "last_subscription_amount": "",
  "subscriptions": "",
  "ip": "",
  "partnerships": "",
  "invoice": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /members/{id}`

Update member 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "mesgs": "",
  "login": "",
  "pass": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "fullname": "",
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "societe": "",
  "company": "",
  "fk_soc": "",
  "socid": "",
  "socialnetworks": "",
  "phone": "",
  "phone_perso": "",
  "phone_pro": "",
  "phone_mobile": "",
  "fax": "",
  "poste": "",
  "morphy": "",
  "public": "",
  "default_lang": "",
  "photo": "",
  "datec": "",
  "datem": "",
  "datevalid": "",
  "gender": "",
  "birth": "",
  "typeid": "",
  "type": "",
  "need_subscription": "",
  "user_id": "",
  "user_login": "",
  "datefin": "",
  "first_subscription_date": "",
  "first_subscription_date_start": "",
  "first_subscription_date_end": "",
  "first_subscription_amount": "",
  "last_subscription_date": "",
  "last_subscription_date_start": "",
  "last_subscription_date_end": "",
  "last_subscription_amount": "",
  "subscriptions": "",
  "ip": "",
  "partnerships": "",
  "invoice": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /members/types/{id}`

Update member type 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member type to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "mesgs": "",
  "login": "",
  "pass": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "fullname": "",
  "civility_id": "",
  "civility_code": "",
  "civility": "",
  "societe": "",
  "company": "",
  "fk_soc": "",
  "socid": "",
  "socialnetworks": "",
  "phone": "",
  "phone_perso": "",
  "phone_pro": "",
  "phone_mobile": "",
  "fax": "",
  "poste": "",
  "morphy": "",
  "public": "",
  "default_lang": "",
  "photo": "",
  "datec": "",
  "datem": "",
  "datevalid": "",
  "gender": "",
  "birth": "",
  "typeid": "",
  "type": "",
  "need_subscription": "",
  "user_id": "",
  "user_login": "",
  "datefin": "",
  "first_subscription_date": "",
  "first_subscription_date_start": "",
  "first_subscription_date_end": "",
  "first_subscription_amount": "",
  "last_subscription_date": "",
  "last_subscription_date_start": "",
  "last_subscription_date_end": "",
  "last_subscription_amount": "",
  "subscriptions": "",
  "ip": "",
  "partnerships": "",
  "invoice": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /members/{id}`

Delete member 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | member ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /members/types/{id}`

Delete member type 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | member type ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `mesgs` |  |
| `login` |  |
| `pass` |  |
| `pass_indatabase` |  |
| `pass_indatabase_crypted` |  |
| `fullname` |  |
| `civility_id` |  |
| `civility_code` |  |
| `civility` |  |
| `societe` |  |
| `company` |  |
| `fk_soc` |  |
| `socid` |  |
| `socialnetworks` |  |
| `phone` |  |
| `phone_perso` |  |
| `phone_pro` |  |
| `phone_mobile` |  |
| `fax` |  |
| `poste` |  |
| `morphy` |  |
| `public` |  |
| `default_lang` |  |
| `photo` |  |
| `datec` |  |
| `datem` |  |
| `datevalid` |  |
| `gender` |  |
| `birth` |  |
| `typeid` |  |
| `type` |  |
| `need_subscription` |  |
| `user_id` |  |
| `user_login` |  |
| `datefin` |  |
| `first_subscription_date` |  |
| `first_subscription_date_start` |  |
| `first_subscription_date_end` |  |
| `first_subscription_amount` |  |
| `last_subscription_date` |  |
| `last_subscription_date_start` |  |
| `last_subscription_date_end` |  |
| `last_subscription_amount` |  |
| `subscriptions` |  |
| `ip` |  |
| `partnerships` |  |
| `invoice` |  |

---

## memberstypes

**Types d'adhérents**

### 🔍 GET (Lecture)

#### `GET /memberstypes/{id}`

Get properties of a member type object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member type |

**Exemple de réponse (JSON) :**

```json
{
  "libelle": "...",
  "label": "...",
  "morphy": "...",
  "duration": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "subscription": "...",
  "amount": "...",
  "caneditamount": "...",
  "note_public": "...",
  "vote": "...",
  "mail_valid": "...",
  "mail_subscription": "...",
  "mail_resiliate": "...",
  "mail_exclude": "...",
  "members": "...",
  "description": "...",
  "email": "...",
  "multilangs": "..."
}
```

#### `GET /memberstypes`

List members types 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.libelle:like:'SO-%') and (t.subscription:=:'1')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /memberstypes?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "libelle": "...",
    "label": "...",
    "morphy": "...",
    "duration": "...",
    "duration_value": "...",
    "duration_unit": "...",
    "subscription": "...",
    "amount": "...",
    "caneditamount": "...",
    "note_public": "...",
    "vote": "...",
    "mail_valid": "...",
    "mail_subscription": "...",
    "mail_resiliate": "...",
    "mail_exclude": "...",
    "members": "...",
    "description": "...",
    "email": "...",
    "multilangs": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /memberstypes`

Create member type object 🔐

**Body nécessaire (JSON) :**

```json
{
  "libelle": "",
  "label": "",
  "morphy": "",
  "duration": "",
  "duration_value": "",
  "duration_unit": "",
  "subscription": "",
  "amount": "",
  "caneditamount": "",
  "note_public": "",
  "vote": "",
  "mail_valid": "",
  "mail_subscription": "",
  "mail_resiliate": "",
  "mail_exclude": "",
  "members": "",
  "description": "",
  "email": "",
  "multilangs": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /memberstypes/{id}`

Update member type 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of member type to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "libelle": "",
  "label": "",
  "morphy": "",
  "duration": "",
  "duration_value": "",
  "duration_unit": "",
  "subscription": "",
  "amount": "",
  "caneditamount": "",
  "note_public": "",
  "vote": "",
  "mail_valid": "",
  "mail_subscription": "",
  "mail_resiliate": "",
  "mail_exclude": "",
  "members": "",
  "description": "",
  "email": "",
  "multilangs": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /memberstypes/{id}`

Delete member type 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | member type ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `libelle` |  |
| `label` |  |
| `morphy` |  |
| `duration` |  |
| `duration_value` |  |
| `duration_unit` |  |
| `subscription` |  |
| `amount` |  |
| `caneditamount` |  |
| `note_public` |  |
| `vote` |  |
| `mail_valid` |  |
| `mail_subscription` |  |
| `mail_resiliate` |  |
| `mail_exclude` |  |
| `members` |  |
| `description` |  |
| `email` |  |
| `multilangs` |  |

---

## objectlinks

**Liens entre objets**

### 🔍 GET (Lecture)

#### `GET /objectlinks/{id}`

Get properties of a ObjectLink object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of objectlink |

**Réponse :** Objet JSON.

#### `GET /objectlinks`

GET object link(s) By Values, not id 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `fk_source` | integer | source id of object we link from |
| `sourcetype` | string | type of the source object |
| `fk_target` | integer | target id of object we link to |
| `targettype` | string | type of the target object |
| `relationtype` | string | type of the relation, usually null |

**Exemple d'URL avec filtres :**
`GET /objectlinks?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

### ✏️ POST (Création)

#### `POST /objectlinks`

Create object link 🔐

**Body nécessaire (JSON) :** Voir documentation Swagger.

**Réponse :** ID ou objet créé.

### 🗑️ DELETE (Suppression)

#### `DELETE /objectlinks/{id}`

Delete an object link 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | object link ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /objectlinks`

Delete object link By Values, not id 🔐

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

---

## orders

**Commandes clients**

### 🔍 GET (Lecture)

#### `GET /orders/{id}`

Get properties of an order object by id 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of order |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `contact_list` | integer | 0: Returned array of contacts/addresses contains all properties, 1: Return array contains just id, -1: Do not return contacts/adddesses |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders/ref/{ref}`

Get properties of an order object by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of object |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `contact_list` | integer | 0: Returned array of contacts/addresses contains all properties, 1: Return array contains just id, -1: Do not return contacts/adddesses |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders/ref_ext/{ref_ext}`

Get properties of an order object by ref_ext 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref_ext` | string | External reference of object |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `contact_list` | integer | 0: Returned array of contacts/addresses contains all properties, 1: Return array contains just id, -1: Do not return contacts/adddesses |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders`

List orders 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `thirdparty_ids` | string | Thirdparty ids to filter orders of (example '1' or '1,2,3') |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `sqlfilterlines` | string | Other criteria to filter answers separated by a comma. Syntax example "(tl.fk_product:=:'17') and (tl.price:<:'250')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |
| `loadlinkedobjects` | integer | Load also linked object |

**Exemple d'URL avec filtres :**
`GET /orders?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "socid": "...",
    "ref_client": "...",
    "ref_customer": "...",
    "contactid": "...",
    "statut": "...",
    "status": "...",
    "billed": "...",
    "date_lim_reglement": "...",
    "cond_reglement_code": "...",
    "cond_reglement_doc": "...",
    "deposit_percent": "...",
    "fk_account": "...",
    "mode_reglement": "...",
    "mode_reglement_id": "...",
    "mode_reglement_code": "...",
    "availability_id": "...",
    "availability_code": "...",
    "availability": "...",
    "demand_reason_id": "...",
    "demand_reason_code": "...",
    "date": "...",
    "date_commande": "...",
    "delivery_date": "...",
    "fk_remise_except": "...",
    "remise_percent": "...",
    "source": "...",
    "signed_status": "...",
    "warehouse_id": "...",
    "extraparams": "...",
    "user_author_id": "...",
    "line": "...",
    "module_source": "...",
    "pos_source": "...",
    "expeditions": "...",
    "online_payment_url": "..."
  }
]
```

#### `GET /orders/{id}/lines`

Get lines of an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders/{id}/lines/{lineid}`

Get properties of a line of an order object by id 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order |
| `lineid` | integer | Id of line |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders/{id}/contacts`

Get contacts of a given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of order |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `type` | string | Type of the contact ('BILLING', 'SHIPPING', 'CUSTOMER', ...) |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

#### `GET /orders/{id}/shipment`

Get the shipments of an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of the order |

**Exemple de réponse (JSON) :**

```json
{
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "contactid": "...",
  "statut": "...",
  "status": "...",
  "billed": "...",
  "date_lim_reglement": "...",
  "cond_reglement_code": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "availability_id": "...",
  "availability_code": "...",
  "availability": "...",
  "demand_reason_id": "...",
  "demand_reason_code": "...",
  "date": "...",
  "date_commande": "...",
  "delivery_date": "...",
  "fk_remise_except": "...",
  "remise_percent": "...",
  "source": "...",
  "signed_status": "...",
  "warehouse_id": "...",
  "extraparams": "...",
  "user_author_id": "...",
  "line": "...",
  "module_source": "...",
  "pos_source": "...",
  "expeditions": "...",
  "online_payment_url": "..."
}
```

### ✏️ POST (Création)

#### `POST /orders`

Create a sale order 🔐

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/{id}/lines`

Add a line to given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |

**Body nécessaire (JSON) :**

```json
{
  "request_data": { /* champs de la ligne */ }
}
```

**Réponse :** `int` — ID de la ligne créée.

#### `POST /orders/{id}/contact/{contactid}/{type}`

Add a contact type of given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |
| `contactid` | integer | Id of contact to add |
| `type` | string | Type (code in dictionary) of the contact (BILLING, SHIPPING, CUSTOMER + possibly your own) |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/{id}/validate`

Validate an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /orders/{id}/reopen`

Tag the order as validated (opened) 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of the order |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/{id}/setinvoiced`

Classify the order as invoiced. Could be also called setbilled 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of the order |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/{id}/close`

Close an order (Classify it as "Delivered") 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet fermé.

#### `POST /orders/{id}/settodraft`

Set an order to draft 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/createfromproposal/{proposalid}`

Create an order using an existing proposal. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `proposalid` | integer | Id of the proposal |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /orders/{id}/shipment/{warehouse_id}`

Create the shipment of an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of the order |
| `warehouse_id` | integer | Id of a warehouse |

**Body nécessaire (JSON) :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /orders/{id}`

Update order general fields (won't touch lines of order) 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /orders/{id}/lines/{lineid}`

Update a line to given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |
| `lineid` | integer | Id of line to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "contactid": "",
  "statut": "",
  "status": "",
  "billed": "",
  "date_lim_reglement": "",
  "cond_reglement_code": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "availability_id": "",
  "availability_code": "",
  "availability": "",
  "demand_reason_id": "",
  "demand_reason_code": "",
  "date": "",
  "date_commande": "",
  "delivery_date": "",
  "fk_remise_except": "",
  "remise_percent": "",
  "source": "",
  "signed_status": "",
  "warehouse_id": "",
  "extraparams": "",
  "user_author_id": "",
  "line": "",
  "module_source": "",
  "pos_source": "",
  "expeditions": "",
  "online_payment_url": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /orders/{id}`

Delete order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /orders/{id}/lines/{lineid}`

Delete a line of a given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |
| `lineid` | integer | Id of line to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /orders/{id}/contact/{contactid}/{type}`

Unlink a contact type of given order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |
| `contactid` | integer | Id of contact |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER). |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `socid` |  |
| `ref_client` |  |
| `ref_customer` |  |
| `contactid` |  |
| `statut` |  |
| `status` |  |
| `billed` |  |
| `date_lim_reglement` |  |
| `cond_reglement_code` |  |
| `cond_reglement_doc` |  |
| `deposit_percent` |  |
| `fk_account` |  |
| `mode_reglement` |  |
| `mode_reglement_id` |  |
| `mode_reglement_code` |  |
| `availability_id` |  |
| `availability_code` |  |
| `availability` |  |
| `demand_reason_id` |  |
| `demand_reason_code` |  |
| `date` |  |
| `date_commande` |  |
| `delivery_date` |  |
| `fk_remise_except` |  |
| `remise_percent` |  |
| `source` |  |
| `signed_status` |  |
| `warehouse_id` |  |
| `extraparams` |  |
| `user_author_id` |  |
| `line` |  |
| `module_source` |  |
| `pos_source` |  |
| `expeditions` |  |
| `online_payment_url` |  |

---

## productlots

**Lots / Numéros de série**

### 🔍 GET (Lecture)

#### `GET /productlots/{id}`

Get all product lot 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product lot to get |

**Exemple de réponse (JSON) :**

```json
{
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_supplier_order": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "fk_product": "...",
  "batch": "...",
  "eatby": "...",
  "sellby": "...",
  "eol_date": "...",
  "manufacturing_date": "...",
  "scrapping_date": "...",
  "qc_frequency": "...",
  "lifetime": "...",
  "datec": "...",
  "fk_user_creat": "...",
  "fk_user_modif": "..."
}
```

#### `GET /productlots`

List of product lot 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `user_ids` | string | User ids filter field (owners of event). Example: '1' or '1,2,3' |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(pl.label:like:'%dol%') and (pl.datec:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /productlots?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "stats_propale": "...",
    "stats_commande": "...",
    "stats_contrat": "...",
    "stats_facture": "...",
    "stats_commande_fournisseur": "...",
    "stats_expedition": "...",
    "stats_reception": "...",
    "stats_supplier_order": "...",
    "stats_mo": "...",
    "stats_bom": "...",
    "stats_mrptoconsume": "...",
    "stats_mrptoproduce": "...",
    "stats_facturerec": "...",
    "stats_facture_fournisseur": "...",
    "fk_product": "...",
    "batch": "...",
    "eatby": "...",
    "sellby": "...",
    "eol_date": "...",
    "manufacturing_date": "...",
    "scrapping_date": "...",
    "qc_frequency": "...",
    "lifetime": "...",
    "datec": "...",
    "fk_user_creat": "...",
    "fk_user_modif": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /productlots`

Create an product lot 🔐

**Body nécessaire (JSON) :**

```json
{
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_supplier_order": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "fk_product": "",
  "batch": "",
  "eatby": "",
  "sellby": "",
  "eol_date": "",
  "manufacturing_date": "",
  "scrapping_date": "",
  "qc_frequency": "",
  "lifetime": "",
  "datec": "",
  "fk_user_creat": "",
  "fk_user_modif": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /productlots/{id}`

Update an Product lot 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product lot to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_supplier_order": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "fk_product": "",
  "batch": "",
  "eatby": "",
  "sellby": "",
  "eol_date": "",
  "manufacturing_date": "",
  "scrapping_date": "",
  "qc_frequency": "",
  "lifetime": "",
  "datec": "",
  "fk_user_creat": "",
  "fk_user_modif": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /productlots/{id}`

Delete an product lot 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product lot to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `stats_propale` |  |
| `stats_commande` |  |
| `stats_contrat` |  |
| `stats_facture` |  |
| `stats_commande_fournisseur` |  |
| `stats_expedition` |  |
| `stats_reception` |  |
| `stats_supplier_order` |  |
| `stats_mo` |  |
| `stats_bom` |  |
| `stats_mrptoconsume` |  |
| `stats_mrptoproduce` |  |
| `stats_facturerec` |  |
| `stats_facture_fournisseur` |  |
| `fk_product` |  |
| `batch` |  |
| `eatby` |  |
| `sellby` |  |
| `eol_date` |  |
| `manufacturing_date` |  |
| `scrapping_date` |  |
| `qc_frequency` |  |
| `lifetime` |  |
| `datec` |  |
| `fk_user_creat` |  |
| `fk_user_modif` |  |

---

## products

**Produits / Services**

### 🔍 GET (Lecture)

#### `GET /products/{id}`

Get a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includestockdata` | integer | Load also information about stock (slower) |
| `includesubproducts` | boolean | Load information about subproducts |
| `includeparentid` | boolean | Load also ID of parent product (if product is a variant of a parent product) |
| `includetrans` | boolean | Load also the translations of product label and description |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/ref/{ref}`

Get product by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of element |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includestockdata` | integer | Load also information about stock (slower) |
| `includesubproducts` | boolean | Load information about subproducts |
| `includeparentid` | boolean | Load also ID of parent product (if product is a variant of a parent product) |
| `includetrans` | boolean | Load also the translations of product label and description |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/ref_ext/{ref_ext}`

Get product by ref_ext 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref_ext` | string | Ref_ext of element |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includestockdata` | integer | Load also information about stock (slower) |
| `includesubproducts` | boolean | Load information about subproducts |
| `includeparentid` | boolean | Load also ID of parent product (if product is a variant of a parent product) |
| `includetrans` | boolean | Load also the translations of product label and description |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/barcode/{barcode}`

Get product by barcode 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `barcode` | string | Barcode of element |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includestockdata` | integer | Load also information about stock (slower) |
| `includesubproducts` | boolean | Load information about subproducts |
| `includeparentid` | boolean | Load also ID of parent product (if product is a variant of a parent product) |
| `includetrans` | boolean | Load also the translations of product label and description |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products`

List products 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `mode` | integer | Use this param to filter list (0 for all, 1 for only product, 2 for only service) |
| `category` | integer | Use this param to filter list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.tobuy:=:0) and (t.tosell:=:1)" |
| `ids_only` | boolean | Return only IDs of product instead of all properties (faster, above all if list is long) |
| `variant_filter` | integer | Use this param to filter list (0 = all, 1=products without variants, 2=parent of variants, 3=variants only) |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0 |
| `includestockdata` | integer | Load also information about stock (slower) |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /products?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "regeximgext": "...",
    "libelle": "...",
    "label": "...",
    "description": "...",
    "other": "...",
    "type": "...",
    "price": "...",
    "price_formated": "...",
    "price_ttc": "...",
    "price_ttc_formated": "...",
    "price_min": "...",
    "price_min_ttc": "...",
    "price_base_type": "...",
    "price_label": "...",
    "multiprices": "...",
    "multiprices_ttc": "...",
    "multiprices_base_type": "...",
    "multiprices_default_vat_code": "...",
    "multiprices_min": "...",
    "multiprices_min_ttc": "...",
    "multiprices_tva_tx": "...",
    "multiprices_recuperableonly": "...",
    "price_by_qty": "...",
    "prices_by_qty": "...",
    "prices_by_qty_id": "...",
    "prices_by_qty_list": "...",
    "level": "...",
    "multilangs": "...",
    "default_vat_code": "...",
    "tva_tx": "...",
    "tva_npr": "...",
    "remise_percent": "...",
    "localtax1_tx": "...",
    "localtax2_tx": "...",
    "localtax1_type": "...",
    "localtax2_type": "...",
    "desc_supplier": "...",
    "vatrate_supplier": "...",
    "default_vat_code_supplier": "...",
    "fourn_multicurrency_price": "...",
    "fourn_multicurrency_unitprice": "...",
    "fourn_multicurrency_tx": "...",
    "fourn_multicurrency_id": "...",
    "fourn_multicurrency_code": "...",
    "packaging": "...",
    "lifetime": "...",
    "qc_frequency": "...",
    "stock_reel": "...",
    "stock_theorique": "...",
    "cost_price": "...",
    "pmp": "...",
    "seuil_stock_alerte": "...",
    "desiredstock": "...",
    "duration_value": "...",
    "duration_unit": "...",
    "duration": "...",
    "fk_default_workstation": "...",
    "status": "...",
    "tosell": "...",
    "status_buy": "...",
    "tobuy": "...",
    "finished": "...",
    "fk_default_bom": "...",
    "product_fourn_price_id": "...",
    "buyprice": "...",
    "tobatch": "...",
    "status_batch": "...",
    "sell_or_eat_by_mandatory": "...",
    "batch_mask": "...",
    "customcode": "...",
    "url": "...",
    "weight": "...",
    "weight_units": "...",
    "length": "...",
    "length_units": "...",
    "width": "...",
    "width_units": "...",
    "height": "...",
    "height_units": "...",
    "surface": "...",
    "surface_units": "...",
    "volume": "...",
    "volume_units": "...",
    "net_measure": "...",
    "net_measure_units": "...",
    "accountancy_code_sell": "...",
    "accountancy_code_sell_intra": "...",
    "accountancy_code_sell_export": "...",
    "accountancy_code_buy": "...",
    "accountancy_code_buy_intra": "...",
    "accountancy_code_buy_export": "...",
    "barcode": "...",
    "barcode_type": "...",
    "barcode_type_code": "...",
    "stats_propale": "...",
    "stats_commande": "...",
    "stats_contrat": "...",
    "stats_facture": "...",
    "stats_proposal_supplier": "...",
    "stats_commande_fournisseur": "...",
    "stats_expedition": "...",
    "stats_reception": "...",
    "stats_mo": "...",
    "stats_bom": "...",
    "stats_mrptoconsume": "...",
    "stats_mrptoproduce": "...",
    "stats_facturerec": "...",
    "stats_facture_fournisseur": "...",
    "stats_facturefournrec": "...",
    "product_fourn_id": "...",
    "product_id_already_linked": "...",
    "stock_warehouse": "...",
    "fk_default_warehouse": "...",
    "fk_price_expression": "...",
    "fourn_qty": "...",
    "fourn_pu": "...",
    "fourn_price_base_type": "...",
    "fourn_socid": "...",
    "ref_fourn": "...",
    "ref_supplier": "...",
    "fk_unit": "...",
    "price_autogen": "...",
    "sousprods": "...",
    "res": "...",
    "is_object_used": "...",
    "is_sousproduit_qty": "...",
    "is_sousproduit_incdec": "...",
    "mandatory_period": "...",
    "stockable_product": "..."
  }
]
```

#### `GET /products/{id}/subproducts`

Get the list of subproducts of a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of parent product/service |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/categories`

Get categories for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/selling_multiprices/per_segment`

Get prices per segment for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/selling_multiprices/per_customer`

Get prices per customer for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `thirdparty_id` | string | Thirdparty id to filter orders of (example '1') |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/selling_multiprices/per_quantity`

Get prices per quantity for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/purchase_prices`

Get purchase prices for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of element |
| `ref_ext` | string | Ref ext of element |
| `barcode` | string | Barcode of element |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/purchase_prices`

Get a list of all purchase prices of products 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `mode` | integer | Use this param to filter list (0 for all, 1 for only product, 2 for only service) |
| `category` | integer | Use this param to filter list by category of product |
| `supplier` | integer | Use this param to filter list by supplier |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.tobuy:=:0) and (t.tosell:=:1)" |

**Exemple d'URL avec filtres :**
`GET /products?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "regeximgext": "...",
    "libelle": "...",
    "label": "...",
    "description": "...",
    "other": "...",
    "type": "...",
    "price": "...",
    "price_formated": "...",
    "price_ttc": "...",
    "price_ttc_formated": "...",
    "price_min": "...",
    "price_min_ttc": "...",
    "price_base_type": "...",
    "price_label": "...",
    "multiprices": "...",
    "multiprices_ttc": "...",
    "multiprices_base_type": "...",
    "multiprices_default_vat_code": "...",
    "multiprices_min": "...",
    "multiprices_min_ttc": "...",
    "multiprices_tva_tx": "...",
    "multiprices_recuperableonly": "...",
    "price_by_qty": "...",
    "prices_by_qty": "...",
    "prices_by_qty_id": "...",
    "prices_by_qty_list": "...",
    "level": "...",
    "multilangs": "...",
    "default_vat_code": "...",
    "tva_tx": "...",
    "tva_npr": "...",
    "remise_percent": "...",
    "localtax1_tx": "...",
    "localtax2_tx": "...",
    "localtax1_type": "...",
    "localtax2_type": "...",
    "desc_supplier": "...",
    "vatrate_supplier": "...",
    "default_vat_code_supplier": "...",
    "fourn_multicurrency_price": "...",
    "fourn_multicurrency_unitprice": "...",
    "fourn_multicurrency_tx": "...",
    "fourn_multicurrency_id": "...",
    "fourn_multicurrency_code": "...",
    "packaging": "...",
    "lifetime": "...",
    "qc_frequency": "...",
    "stock_reel": "...",
    "stock_theorique": "...",
    "cost_price": "...",
    "pmp": "...",
    "seuil_stock_alerte": "...",
    "desiredstock": "...",
    "duration_value": "...",
    "duration_unit": "...",
    "duration": "...",
    "fk_default_workstation": "...",
    "status": "...",
    "tosell": "...",
    "status_buy": "...",
    "tobuy": "...",
    "finished": "...",
    "fk_default_bom": "...",
    "product_fourn_price_id": "...",
    "buyprice": "...",
    "tobatch": "...",
    "status_batch": "...",
    "sell_or_eat_by_mandatory": "...",
    "batch_mask": "...",
    "customcode": "...",
    "url": "...",
    "weight": "...",
    "weight_units": "...",
    "length": "...",
    "length_units": "...",
    "width": "...",
    "width_units": "...",
    "height": "...",
    "height_units": "...",
    "surface": "...",
    "surface_units": "...",
    "volume": "...",
    "volume_units": "...",
    "net_measure": "...",
    "net_measure_units": "...",
    "accountancy_code_sell": "...",
    "accountancy_code_sell_intra": "...",
    "accountancy_code_sell_export": "...",
    "accountancy_code_buy": "...",
    "accountancy_code_buy_intra": "...",
    "accountancy_code_buy_export": "...",
    "barcode": "...",
    "barcode_type": "...",
    "barcode_type_code": "...",
    "stats_propale": "...",
    "stats_commande": "...",
    "stats_contrat": "...",
    "stats_facture": "...",
    "stats_proposal_supplier": "...",
    "stats_commande_fournisseur": "...",
    "stats_expedition": "...",
    "stats_reception": "...",
    "stats_mo": "...",
    "stats_bom": "...",
    "stats_mrptoconsume": "...",
    "stats_mrptoproduce": "...",
    "stats_facturerec": "...",
    "stats_facture_fournisseur": "...",
    "stats_facturefournrec": "...",
    "product_fourn_id": "...",
    "product_id_already_linked": "...",
    "stock_warehouse": "...",
    "fk_default_warehouse": "...",
    "fk_price_expression": "...",
    "fourn_qty": "...",
    "fourn_pu": "...",
    "fourn_price_base_type": "...",
    "fourn_socid": "...",
    "ref_fourn": "...",
    "ref_supplier": "...",
    "fk_unit": "...",
    "price_autogen": "...",
    "sousprods": "...",
    "res": "...",
    "is_object_used": "...",
    "is_sousproduit_qty": "...",
    "is_sousproduit_incdec": "...",
    "mandatory_period": "...",
    "stockable_product": "..."
  }
]
```

#### `GET /products/attributes`

Get attributes 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:color)" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /products?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "regeximgext": "...",
    "libelle": "...",
    "label": "...",
    "description": "...",
    "other": "...",
    "type": "...",
    "price": "...",
    "price_formated": "...",
    "price_ttc": "...",
    "price_ttc_formated": "...",
    "price_min": "...",
    "price_min_ttc": "...",
    "price_base_type": "...",
    "price_label": "...",
    "multiprices": "...",
    "multiprices_ttc": "...",
    "multiprices_base_type": "...",
    "multiprices_default_vat_code": "...",
    "multiprices_min": "...",
    "multiprices_min_ttc": "...",
    "multiprices_tva_tx": "...",
    "multiprices_recuperableonly": "...",
    "price_by_qty": "...",
    "prices_by_qty": "...",
    "prices_by_qty_id": "...",
    "prices_by_qty_list": "...",
    "level": "...",
    "multilangs": "...",
    "default_vat_code": "...",
    "tva_tx": "...",
    "tva_npr": "...",
    "remise_percent": "...",
    "localtax1_tx": "...",
    "localtax2_tx": "...",
    "localtax1_type": "...",
    "localtax2_type": "...",
    "desc_supplier": "...",
    "vatrate_supplier": "...",
    "default_vat_code_supplier": "...",
    "fourn_multicurrency_price": "...",
    "fourn_multicurrency_unitprice": "...",
    "fourn_multicurrency_tx": "...",
    "fourn_multicurrency_id": "...",
    "fourn_multicurrency_code": "...",
    "packaging": "...",
    "lifetime": "...",
    "qc_frequency": "...",
    "stock_reel": "...",
    "stock_theorique": "...",
    "cost_price": "...",
    "pmp": "...",
    "seuil_stock_alerte": "...",
    "desiredstock": "...",
    "duration_value": "...",
    "duration_unit": "...",
    "duration": "...",
    "fk_default_workstation": "...",
    "status": "...",
    "tosell": "...",
    "status_buy": "...",
    "tobuy": "...",
    "finished": "...",
    "fk_default_bom": "...",
    "product_fourn_price_id": "...",
    "buyprice": "...",
    "tobatch": "...",
    "status_batch": "...",
    "sell_or_eat_by_mandatory": "...",
    "batch_mask": "...",
    "customcode": "...",
    "url": "...",
    "weight": "...",
    "weight_units": "...",
    "length": "...",
    "length_units": "...",
    "width": "...",
    "width_units": "...",
    "height": "...",
    "height_units": "...",
    "surface": "...",
    "surface_units": "...",
    "volume": "...",
    "volume_units": "...",
    "net_measure": "...",
    "net_measure_units": "...",
    "accountancy_code_sell": "...",
    "accountancy_code_sell_intra": "...",
    "accountancy_code_sell_export": "...",
    "accountancy_code_buy": "...",
    "accountancy_code_buy_intra": "...",
    "accountancy_code_buy_export": "...",
    "barcode": "...",
    "barcode_type": "...",
    "barcode_type_code": "...",
    "stats_propale": "...",
    "stats_commande": "...",
    "stats_contrat": "...",
    "stats_facture": "...",
    "stats_proposal_supplier": "...",
    "stats_commande_fournisseur": "...",
    "stats_expedition": "...",
    "stats_reception": "...",
    "stats_mo": "...",
    "stats_bom": "...",
    "stats_mrptoconsume": "...",
    "stats_mrptoproduce": "...",
    "stats_facturerec": "...",
    "stats_facture_fournisseur": "...",
    "stats_facturefournrec": "...",
    "product_fourn_id": "...",
    "product_id_already_linked": "...",
    "stock_warehouse": "...",
    "fk_default_warehouse": "...",
    "fk_price_expression": "...",
    "fourn_qty": "...",
    "fourn_pu": "...",
    "fourn_price_base_type": "...",
    "fourn_socid": "...",
    "ref_fourn": "...",
    "ref_supplier": "...",
    "fk_unit": "...",
    "price_autogen": "...",
    "sousprods": "...",
    "res": "...",
    "is_object_used": "...",
    "is_sousproduit_qty": "...",
    "is_sousproduit_incdec": "...",
    "mandatory_period": "...",
    "stockable_product": "..."
  }
]
```

#### `GET /products/attributes/{id}`

Get attribute by ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/ref/{ref}`

Get attributes by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Reference of Attribute |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/ref_ext/{ref_ext}`

Get attributes by ref_ext 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref_ext` | string | External reference of Attribute |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/values/{id}`

Get attribute value by ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute value |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/{id}/values/ref/{ref}`

Get attribute value by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute value |
| `ref` | string | Ref of Attribute value |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/{id}/values`

Get all values for an attribute ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of an Attribute |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/attributes/ref/{ref}/values`

Get all values for an attribute ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of an Attribute |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/variants`

Get product variants 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includestock` | integer | Default value 0. If parameter is set to 1 the response will contain stock data of each variant |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/ref/{ref}/variants`

Get product variants by Product ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of Product |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/stock`

Get stock data for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `selected_warehouse_id` | integer | ID of warehouse |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

#### `GET /products/{id}/contacts`

Get contacts of a given product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of product |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `type` | string | Type of the contact ('BILLING', 'SHIPPING', 'CUSTOMER', ...) |

**Exemple de réponse (JSON) :**

```json
{
  "regeximgext": "...",
  "libelle": "...",
  "label": "...",
  "description": "...",
  "other": "...",
  "type": "...",
  "price": "...",
  "price_formated": "...",
  "price_ttc": "...",
  "price_ttc_formated": "...",
  "price_min": "...",
  "price_min_ttc": "...",
  "price_base_type": "...",
  "price_label": "...",
  "multiprices": "...",
  "multiprices_ttc": "...",
  "multiprices_base_type": "...",
  "multiprices_default_vat_code": "...",
  "multiprices_min": "...",
  "multiprices_min_ttc": "...",
  "multiprices_tva_tx": "...",
  "multiprices_recuperableonly": "...",
  "price_by_qty": "...",
  "prices_by_qty": "...",
  "prices_by_qty_id": "...",
  "prices_by_qty_list": "...",
  "level": "...",
  "multilangs": "...",
  "default_vat_code": "...",
  "tva_tx": "...",
  "tva_npr": "...",
  "remise_percent": "...",
  "localtax1_tx": "...",
  "localtax2_tx": "...",
  "localtax1_type": "...",
  "localtax2_type": "...",
  "desc_supplier": "...",
  "vatrate_supplier": "...",
  "default_vat_code_supplier": "...",
  "fourn_multicurrency_price": "...",
  "fourn_multicurrency_unitprice": "...",
  "fourn_multicurrency_tx": "...",
  "fourn_multicurrency_id": "...",
  "fourn_multicurrency_code": "...",
  "packaging": "...",
  "lifetime": "...",
  "qc_frequency": "...",
  "stock_reel": "...",
  "stock_theorique": "...",
  "cost_price": "...",
  "pmp": "...",
  "seuil_stock_alerte": "...",
  "desiredstock": "...",
  "duration_value": "...",
  "duration_unit": "...",
  "duration": "...",
  "fk_default_workstation": "...",
  "status": "...",
  "tosell": "...",
  "status_buy": "...",
  "tobuy": "...",
  "finished": "...",
  "fk_default_bom": "...",
  "product_fourn_price_id": "...",
  "buyprice": "...",
  "tobatch": "...",
  "status_batch": "...",
  "sell_or_eat_by_mandatory": "...",
  "batch_mask": "...",
  "customcode": "...",
  "url": "...",
  "weight": "...",
  "weight_units": "...",
  "length": "...",
  "length_units": "...",
  "width": "...",
  "width_units": "...",
  "height": "...",
  "height_units": "...",
  "surface": "...",
  "surface_units": "...",
  "volume": "...",
  "volume_units": "...",
  "net_measure": "...",
  "net_measure_units": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_sell_intra": "...",
  "accountancy_code_sell_export": "...",
  "accountancy_code_buy": "...",
  "accountancy_code_buy_intra": "...",
  "accountancy_code_buy_export": "...",
  "barcode": "...",
  "barcode_type": "...",
  "barcode_type_code": "...",
  "stats_propale": "...",
  "stats_commande": "...",
  "stats_contrat": "...",
  "stats_facture": "...",
  "stats_proposal_supplier": "...",
  "stats_commande_fournisseur": "...",
  "stats_expedition": "...",
  "stats_reception": "...",
  "stats_mo": "...",
  "stats_bom": "...",
  "stats_mrptoconsume": "...",
  "stats_mrptoproduce": "...",
  "stats_facturerec": "...",
  "stats_facture_fournisseur": "...",
  "stats_facturefournrec": "...",
  "product_fourn_id": "...",
  "product_id_already_linked": "...",
  "stock_warehouse": "...",
  "fk_default_warehouse": "...",
  "fk_price_expression": "...",
  "fourn_qty": "...",
  "fourn_pu": "...",
  "fourn_price_base_type": "...",
  "fourn_socid": "...",
  "ref_fourn": "...",
  "ref_supplier": "...",
  "fk_unit": "...",
  "price_autogen": "...",
  "sousprods": "...",
  "res": "...",
  "is_object_used": "...",
  "is_sousproduit_qty": "...",
  "is_sousproduit_incdec": "...",
  "mandatory_period": "...",
  "stockable_product": "..."
}
```

### ✏️ POST (Création)

#### `POST /products`

Create a product 🔐

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/{id}/subproducts/add`

Add a subproduct 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of parent product/service |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/{id}/purchase_prices`

Add/Update purchase prices for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/attributes`

Add attributes 🔐

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/attributes/{id}/values`

Add attribute value 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/{id}/variants`

Add variant 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Product |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/ref/{ref}/variants`

Add variant by product ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `ref` | string | Ref of Product |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /products/{id}/contact/{contactid}/{type}`

Add a contact type of given product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of product to update |
| `contactid` | integer | Id of contact to add |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER) |

**Body nécessaire (JSON) :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /products/{id}`

Update a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of product to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /products/attributes/{id}`

Update attributes by ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /products/attributes/values/{id}`

Update attribute value 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /products/variants/{id}`

Update product variants 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Variant |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "regeximgext": "",
  "libelle": "",
  "label": "",
  "description": "",
  "other": "",
  "type": "",
  "price": "",
  "price_formated": "",
  "price_ttc": "",
  "price_ttc_formated": "",
  "price_min": "",
  "price_min_ttc": "",
  "price_base_type": "",
  "price_label": "",
  "multiprices": "",
  "multiprices_ttc": "",
  "multiprices_base_type": "",
  "multiprices_default_vat_code": "",
  "multiprices_min": "",
  "multiprices_min_ttc": "",
  "multiprices_tva_tx": "",
  "multiprices_recuperableonly": "",
  "price_by_qty": "",
  "prices_by_qty": "",
  "prices_by_qty_id": "",
  "prices_by_qty_list": "",
  "level": "",
  "multilangs": "",
  "default_vat_code": "",
  "tva_tx": "",
  "tva_npr": "",
  "remise_percent": "",
  "localtax1_tx": "",
  "localtax2_tx": "",
  "localtax1_type": "",
  "localtax2_type": "",
  "desc_supplier": "",
  "vatrate_supplier": "",
  "default_vat_code_supplier": "",
  "fourn_multicurrency_price": "",
  "fourn_multicurrency_unitprice": "",
  "fourn_multicurrency_tx": "",
  "fourn_multicurrency_id": "",
  "fourn_multicurrency_code": "",
  "packaging": "",
  "lifetime": "",
  "qc_frequency": "",
  "stock_reel": "",
  "stock_theorique": "",
  "cost_price": "",
  "pmp": "",
  "seuil_stock_alerte": "",
  "desiredstock": "",
  "duration_value": "",
  "duration_unit": "",
  "duration": "",
  "fk_default_workstation": "",
  "status": "",
  "tosell": "",
  "status_buy": "",
  "tobuy": "",
  "finished": "",
  "fk_default_bom": "",
  "product_fourn_price_id": "",
  "buyprice": "",
  "tobatch": "",
  "status_batch": "",
  "sell_or_eat_by_mandatory": "",
  "batch_mask": "",
  "customcode": "",
  "url": "",
  "weight": "",
  "weight_units": "",
  "length": "",
  "length_units": "",
  "width": "",
  "width_units": "",
  "height": "",
  "height_units": "",
  "surface": "",
  "surface_units": "",
  "volume": "",
  "volume_units": "",
  "net_measure": "",
  "net_measure_units": "",
  "accountancy_code_sell": "",
  "accountancy_code_sell_intra": "",
  "accountancy_code_sell_export": "",
  "accountancy_code_buy": "",
  "accountancy_code_buy_intra": "",
  "accountancy_code_buy_export": "",
  "barcode": "",
  "barcode_type": "",
  "barcode_type_code": "",
  "stats_propale": "",
  "stats_commande": "",
  "stats_contrat": "",
  "stats_facture": "",
  "stats_proposal_supplier": "",
  "stats_commande_fournisseur": "",
  "stats_expedition": "",
  "stats_reception": "",
  "stats_mo": "",
  "stats_bom": "",
  "stats_mrptoconsume": "",
  "stats_mrptoproduce": "",
  "stats_facturerec": "",
  "stats_facture_fournisseur": "",
  "stats_facturefournrec": "",
  "product_fourn_id": "",
  "product_id_already_linked": "",
  "stock_warehouse": "",
  "fk_default_warehouse": "",
  "fk_price_expression": "",
  "fourn_qty": "",
  "fourn_pu": "",
  "fourn_price_base_type": "",
  "fourn_socid": "",
  "ref_fourn": "",
  "ref_supplier": "",
  "fk_unit": "",
  "price_autogen": "",
  "sousprods": "",
  "res": "",
  "is_object_used": "",
  "is_sousproduit_qty": "",
  "is_sousproduit_incdec": "",
  "mandatory_period": "",
  "stockable_product": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /products/{id}`

Delete a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Product ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/{id}/subproducts/remove/{subproduct_id}`

Remove a subproduct 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of parent product/service |
| `subproduct_id` | integer | ID of child product/service |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/{id}/purchase_prices/{priceid}`

Delete a purchase price for a product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Product ID |
| `priceid` | integer | purchase price ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/attributes/{id}`

Delete attributes by ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/attributes/values/{id}`

Delete attribute value by ID 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute value |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/attributes/{id}/values/ref/{ref}`

Delete attribute value by ref 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Attribute |
| `ref` | string | Ref of Attribute value |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/variants/{id}`

Delete product variants 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of Variant |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /products/{id}/contact/{contactid}/{type}`

Unlink a contact type of given product 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of product to update |
| `contactid` | integer | Id of contact |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER) |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `regeximgext` |  |
| `libelle` |  |
| `label` |  |
| `description` |  |
| `other` |  |
| `type` |  |
| `price` |  |
| `price_formated` |  |
| `price_ttc` |  |
| `price_ttc_formated` |  |
| `price_min` |  |
| `price_min_ttc` |  |
| `price_base_type` |  |
| `price_label` |  |
| `multiprices` |  |
| `multiprices_ttc` |  |
| `multiprices_base_type` |  |
| `multiprices_default_vat_code` |  |
| `multiprices_min` |  |
| `multiprices_min_ttc` |  |
| `multiprices_tva_tx` |  |
| `multiprices_recuperableonly` |  |
| `price_by_qty` |  |
| `prices_by_qty` |  |
| `prices_by_qty_id` |  |
| `prices_by_qty_list` |  |
| `level` |  |
| `multilangs` |  |
| `default_vat_code` |  |
| `tva_tx` |  |
| `tva_npr` |  |
| `remise_percent` |  |
| `localtax1_tx` |  |
| `localtax2_tx` |  |
| `localtax1_type` |  |
| `localtax2_type` |  |
| `desc_supplier` |  |
| `vatrate_supplier` |  |
| `default_vat_code_supplier` |  |
| `fourn_multicurrency_price` |  |
| `fourn_multicurrency_unitprice` |  |
| `fourn_multicurrency_tx` |  |
| `fourn_multicurrency_id` |  |
| `fourn_multicurrency_code` |  |
| `packaging` |  |
| `lifetime` |  |
| `qc_frequency` |  |
| `stock_reel` |  |
| `stock_theorique` |  |
| `cost_price` |  |
| `pmp` |  |
| `seuil_stock_alerte` |  |
| `desiredstock` |  |
| `duration_value` |  |
| `duration_unit` |  |
| `duration` |  |
| `fk_default_workstation` |  |
| `status` |  |
| `tosell` |  |
| `status_buy` |  |
| `tobuy` |  |
| `finished` |  |
| `fk_default_bom` |  |
| `product_fourn_price_id` |  |
| `buyprice` |  |
| `tobatch` |  |
| `status_batch` |  |
| `sell_or_eat_by_mandatory` |  |
| `batch_mask` |  |
| `customcode` |  |
| `url` |  |
| `weight` |  |
| `weight_units` |  |
| `length` |  |
| `length_units` |  |
| `width` |  |
| `width_units` |  |
| `height` |  |
| `height_units` |  |
| `surface` |  |
| `surface_units` |  |
| `volume` |  |
| `volume_units` |  |
| `net_measure` |  |
| `net_measure_units` |  |
| `accountancy_code_sell` |  |
| `accountancy_code_sell_intra` |  |
| `accountancy_code_sell_export` |  |
| `accountancy_code_buy` |  |
| `accountancy_code_buy_intra` |  |
| `accountancy_code_buy_export` |  |
| `barcode` |  |
| `barcode_type` |  |
| `barcode_type_code` |  |
| `stats_propale` |  |
| `stats_commande` |  |
| `stats_contrat` |  |
| `stats_facture` |  |
| `stats_proposal_supplier` |  |
| `stats_commande_fournisseur` |  |
| `stats_expedition` |  |
| `stats_reception` |  |
| `stats_mo` |  |
| `stats_bom` |  |
| `stats_mrptoconsume` |  |
| `stats_mrptoproduce` |  |
| `stats_facturerec` |  |
| `stats_facture_fournisseur` |  |
| `stats_facturefournrec` |  |
| `product_fourn_id` |  |
| `product_id_already_linked` |  |
| `stock_warehouse` |  |
| `fk_default_warehouse` |  |
| `fk_price_expression` |  |
| `fourn_qty` |  |
| `fourn_pu` |  |
| `fourn_price_base_type` |  |
| `fourn_socid` |  |
| `ref_fourn` |  |
| `ref_supplier` |  |
| `fk_unit` |  |
| `price_autogen` |  |
| `sousprods` |  |
| `res` |  |
| `is_object_used` |  |
| `is_sousproduit_qty` |  |
| `is_sousproduit_incdec` |  |
| `mandatory_period` |  |
| `stockable_product` |  |

---

## recruitments

**Recrutement**

### 🔍 GET (Lecture)

#### `GET /recruitments/jobposition/{id}`

Get properties of a jobposition object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of jobposition |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "label": "...",
  "qty": "...",
  "fk_soc": "...",
  "fk_project": "...",
  "fk_user_recruiter": "...",
  "email_recruiter": "...",
  "remuneration_suggested": "...",
  "fk_user_supervisor": "...",
  "fk_establishment": "...",
  "date_planned": "...",
  "description": "...",
  "note_public": "...",
  "note_private": "...",
  "fk_user_creat": "...",
  "fk_user_modif": "...",
  "model_pdf": "...",
  "status": "..."
}
```

#### `GET /recruitments/candidature/{id}`

Get properties of a candidature object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of candidature |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "label": "...",
  "qty": "...",
  "fk_soc": "...",
  "fk_project": "...",
  "fk_user_recruiter": "...",
  "email_recruiter": "...",
  "remuneration_suggested": "...",
  "fk_user_supervisor": "...",
  "fk_establishment": "...",
  "date_planned": "...",
  "description": "...",
  "note_public": "...",
  "note_private": "...",
  "fk_user_creat": "...",
  "fk_user_modif": "...",
  "model_pdf": "...",
  "status": "..."
}
```

#### `GET /recruitments/jobposition`

List jobpositions 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /recruitments?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "ref": "...",
    "label": "...",
    "qty": "...",
    "fk_soc": "...",
    "fk_project": "...",
    "fk_user_recruiter": "...",
    "email_recruiter": "...",
    "remuneration_suggested": "...",
    "fk_user_supervisor": "...",
    "fk_establishment": "...",
    "date_planned": "...",
    "description": "...",
    "note_public": "...",
    "note_private": "...",
    "fk_user_creat": "...",
    "fk_user_modif": "...",
    "model_pdf": "...",
    "status": "..."
  }
]
```

#### `GET /recruitments/candidature`

List candatures 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /recruitments?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "ref": "...",
    "label": "...",
    "qty": "...",
    "fk_soc": "...",
    "fk_project": "...",
    "fk_user_recruiter": "...",
    "email_recruiter": "...",
    "remuneration_suggested": "...",
    "fk_user_supervisor": "...",
    "fk_establishment": "...",
    "date_planned": "...",
    "description": "...",
    "note_public": "...",
    "note_private": "...",
    "fk_user_creat": "...",
    "fk_user_modif": "...",
    "model_pdf": "...",
    "status": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /recruitments/jobposition`

Create jobposition object 🔐

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "label": "",
  "qty": "",
  "fk_soc": "",
  "fk_project": "",
  "fk_user_recruiter": "",
  "email_recruiter": "",
  "remuneration_suggested": "",
  "fk_user_supervisor": "",
  "fk_establishment": "",
  "date_planned": "",
  "description": "",
  "note_public": "",
  "note_private": "",
  "fk_user_creat": "",
  "fk_user_modif": "",
  "model_pdf": "",
  "status": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /recruitments/candidature`

Create candidature object 🔐

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "label": "",
  "qty": "",
  "fk_soc": "",
  "fk_project": "",
  "fk_user_recruiter": "",
  "email_recruiter": "",
  "remuneration_suggested": "",
  "fk_user_supervisor": "",
  "fk_establishment": "",
  "date_planned": "",
  "description": "",
  "note_public": "",
  "note_private": "",
  "fk_user_creat": "",
  "fk_user_modif": "",
  "model_pdf": "",
  "status": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /recruitments/jobposition/{id}`

Update jobposition 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of jobposition to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "label": "",
  "qty": "",
  "fk_soc": "",
  "fk_project": "",
  "fk_user_recruiter": "",
  "email_recruiter": "",
  "remuneration_suggested": "",
  "fk_user_supervisor": "",
  "fk_establishment": "",
  "date_planned": "",
  "description": "",
  "note_public": "",
  "note_private": "",
  "fk_user_creat": "",
  "fk_user_modif": "",
  "model_pdf": "",
  "status": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /recruitments/candidature/{id}`

Update candidature 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of candidature to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "label": "",
  "qty": "",
  "fk_soc": "",
  "fk_project": "",
  "fk_user_recruiter": "",
  "email_recruiter": "",
  "remuneration_suggested": "",
  "fk_user_supervisor": "",
  "fk_establishment": "",
  "date_planned": "",
  "description": "",
  "note_public": "",
  "note_private": "",
  "fk_user_creat": "",
  "fk_user_modif": "",
  "model_pdf": "",
  "status": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /recruitments/jobposition/{id}`

Delete jobposition 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | jobposition ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /recruitments/candidature/{id}`

Delete candidature 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | candidature ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `ref` |  |
| `label` |  |
| `qty` |  |
| `fk_soc` |  |
| `fk_project` |  |
| `fk_user_recruiter` |  |
| `email_recruiter` |  |
| `remuneration_suggested` |  |
| `fk_user_supervisor` |  |
| `fk_establishment` |  |
| `date_planned` |  |
| `description` |  |
| `note_public` |  |
| `note_private` |  |
| `fk_user_creat` |  |
| `fk_user_modif` |  |
| `model_pdf` |  |
| `status` |  |

---

## salaries

**Salaires / Paiements salaires**

### 🔍 GET (Lecture)

#### `GET /salaries`

Get the list of salaries. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple d'URL avec filtres :**
`GET /salaries?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "fk_user": "...",
    "datep": "...",
    "datev": "...",
    "salary": "...",
    "amount": "...",
    "fk_project": "...",
    "type_payment": "...",
    "type_payment_code": "...",
    "label": "...",
    "datesp": "...",
    "dateep": "...",
    "fk_bank": "...",
    "fk_account": "...",
    "accountid": "...",
    "fk_user_author": "...",
    "fk_user_modif": "...",
    "user": "...",
    "paye": "...",
    "resteapayer": "..."
  }
]
```

#### `GET /salaries/{id}`

Get salary by ID. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of salary |

**Exemple de réponse (JSON) :**

```json
{
  "fk_user": "...",
  "datep": "...",
  "datev": "...",
  "salary": "...",
  "amount": "...",
  "fk_project": "...",
  "type_payment": "...",
  "type_payment_code": "...",
  "label": "...",
  "datesp": "...",
  "dateep": "...",
  "fk_bank": "...",
  "fk_account": "...",
  "accountid": "...",
  "fk_user_author": "...",
  "fk_user_modif": "...",
  "user": "...",
  "paye": "...",
  "resteapayer": "..."
}
```

#### `GET /salaries/payments`

Get the list of payment of salaries. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |

**Exemple d'URL avec filtres :**
`GET /salaries?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "fk_user": "...",
    "datep": "...",
    "datev": "...",
    "salary": "...",
    "amount": "...",
    "fk_project": "...",
    "type_payment": "...",
    "type_payment_code": "...",
    "label": "...",
    "datesp": "...",
    "dateep": "...",
    "fk_bank": "...",
    "fk_account": "...",
    "accountid": "...",
    "fk_user_author": "...",
    "fk_user_modif": "...",
    "user": "...",
    "paye": "...",
    "resteapayer": "..."
  }
]
```

#### `GET /salaries/payments/{pid}`

Get a given payment. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `pid` | integer | ID of payment salary |

**Exemple de réponse (JSON) :**

```json
{
  "fk_user": "...",
  "datep": "...",
  "datev": "...",
  "salary": "...",
  "amount": "...",
  "fk_project": "...",
  "type_payment": "...",
  "type_payment_code": "...",
  "label": "...",
  "datesp": "...",
  "dateep": "...",
  "fk_bank": "...",
  "fk_account": "...",
  "accountid": "...",
  "fk_user_author": "...",
  "fk_user_modif": "...",
  "user": "...",
  "paye": "...",
  "resteapayer": "..."
}
```

### ✏️ POST (Création)

#### `POST /salaries`

Create salary object 🔐

**Body nécessaire (JSON) :**

```json
{
  "fk_user": "",
  "datep": "",
  "datev": "",
  "salary": "",
  "amount": "",
  "fk_project": "",
  "type_payment": "",
  "type_payment_code": "",
  "label": "",
  "datesp": "",
  "dateep": "",
  "fk_bank": "",
  "fk_account": "",
  "accountid": "",
  "fk_user_author": "",
  "fk_user_modif": "",
  "user": "",
  "paye": "",
  "resteapayer": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /salaries/{id}/payments`

Create payment salary on a salary 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of salary |

**Body nécessaire (JSON) :**

```json
{
  "datepaye": 1709856000,       // Date du paiement (timestamp Unix)
  "paiementtype": "VIR",         // Mode: VIR (virement), CHQ (chèque), CB, LIQ, etc.
  "chid": 5,                     // ID du salaire / facture à payer
  "amounts": { "5": 1500.00 },   // { "ID_salaire": montant_payé }
  "accountid": 1,                 // ID du compte bancaire (OBLIGATOIRE)
  "num_payment": "",              // Numéro de paiement (optionnel)
  "comment": ""                   // Commentaire (optionnel)
}
```

**Réponse :** `int` — ID du paiement créé.

### 🔄 PUT (Modification)

#### `PUT /salaries/{id}`

Update salary 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of salary |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fk_user": "",
  "datep": "",
  "datev": "",
  "salary": "",
  "amount": "",
  "fk_project": "",
  "type_payment": "",
  "type_payment_code": "",
  "label": "",
  "datesp": "",
  "dateep": "",
  "fk_bank": "",
  "fk_account": "",
  "accountid": "",
  "fk_user_author": "",
  "fk_user_modif": "",
  "user": "",
  "paye": "",
  "resteapayer": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /salaries/{id}/payments`

Update paymentsalary 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of paymentsalary |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "datepaye": 1709856000,
  "paiementtype": "VIR",
  "amounts": { "5": 2000.00 },
  "accountid": 1
}
```

**Réponse :** Objet modifié.

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `fk_user` |  |
| `datep` |  |
| `datev` |  |
| `salary` |  |
| `amount` |  |
| `fk_project` |  |
| `type_payment` |  |
| `type_payment_code` |  |
| `label` |  |
| `datesp` |  |
| `dateep` |  |
| `fk_bank` |  |
| `fk_account` |  |
| `accountid` |  |
| `fk_user_author` |  |
| `fk_user_modif` |  |
| `user` |  |
| `paye` |  |
| `resteapayer` |  |

---

## setup

**Configuration**

### 🔍 GET (Lecture)

#### `GET /setup/actiontriggers`

Get the list of Action Triggers. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `elementtype` | string | Type of element ('adherent', 'commande', 'thirdparty', 'facture', 'propal', 'product', ...) |
| `lang` | string | Code of the language the label of the type must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.label:like:'SO-%')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/ordering_methods`

Get the list of ordering methods. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Payment type is active or not |
| `sqlfilters` | string | SQL criteria to filter with. Syntax example "(t.code:=:'OrderByWWW')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/ordering_origins`

Get the list of ordering origins. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Payment type is active or not |
| `sqlfilters` | string | SQL criteria to filter with. Syntax example "(t.code:=:'OrderByWWW')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/payment_types`

Get the list of payments types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Payment type is active or not |
| `sqlfilters` | string | SQL criteria to filter with. Syntax example "(t.code:=:'CHQ')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/regions`

Get the list of regions. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `country` | integer | To filter on country |
| `filter` | string | To filter the regions by name |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/regions/{id}`

Get region by ID. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of region |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/regions/byCode/{code}`

Get region by Code. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `code` | string | Code of region |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/states`

Get the list of states/provinces. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `country` | integer | To filter on country |
| `filter` | string | To filter the states by name |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/states/{id}`

Get state by ID. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of state |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/states/byCode/{code}`

Get state by Code. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `code` | string | Code of state |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/countries`

Get the list of countries. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `filter` | string | To filter the countries by name |
| `lang` | string | Code of the language the label of the countries must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/countries/{id}`

Get country by ID. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of country |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `lang` | string | Code of the language the name of the country must be translated to |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/countries/byCode/{code}`

Get country by Code. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `code` | string | Code of country (2 characters) |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `lang` | string | Code of the language the name of the country must be translated to |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/countries/byISO/{iso}`

Get country by Iso. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `iso` | string | ISO of country (3 characters) |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `lang` | string | Code of the language the name of the country must be translated to |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/availability`

Get the list of delivery times. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Delivery times is active or not |
| `sqlfilters` | string | SQL criteria to filter with. |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/event_types`

Get the list of events types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `type` | string | To filter on type of event |
| `module` | string | To filter on module events |
| `active` | integer | Event's type is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/expensereport_types`

Get the list of Expense Report types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `module` | string | To filter on module |
| `active` | integer | Event's type is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/holiday_types`

Get the list of holiday types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `fk_country` | string | To filter on country |
| `active` | integer | Holiday is active or not |
| `lang` | string | Code of the language the label of the holiday must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/public_holiday`

Get the list of public holiday. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `fk_country` | string | To filter on country |
| `active` | integer | Holiday is active or not |
| `lang` | string | Code of the language the label of the holiday must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/contact_types`

Get the list of contacts types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `type` | string | To filter on type of contact |
| `module` | string | To filter on module contacts |
| `active` | integer | Contact's type is active or not |
| `lang` | string | Code of the language the label of the civility must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/civilities`

Get the list of civilities. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `module` | string | To filter on module events |
| `active` | integer | Civility is active or not |
| `lang` | string | Code of the language the label of the civility must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/currencies`

Get the list of currencies. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `multicurrency` | integer | Multicurrency rates (0: no multicurrency, 1: last rate, 2: all rates) |
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Payment term is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/extrafields`

Get the list of extra fields. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `elementtype` | string | Type of element ('adherent', 'commande', 'thirdparty', 'facture', 'propal', 'product', ...) |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.label:like:'SO-%')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/extrafields/{elementtype}/{attrname}`

 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `attrname` | string | extrafield attrname |
| `elementtype` | string | extrafield elementtype |

**Réponse :** Objet JSON.

#### `GET /setup/dictionary/towns`

Get the list of towns. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `zipcode` | string | To filter on zipcode |
| `town` | string | To filter on city name |
| `active` | integer | Town is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/payment_terms`

Get the list of payments terms. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Payment term is active or not |
| `sqlfilters` | string | SQL criteria to filter. Syntax example "(t.code:=:'CHQ')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/shipping_methods`

Get the list of shipping methods. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `limit` | integer | Number of items per page |
| `page` | integer | Page number |
| `active` | integer | Shipping methodsm is active or not |
| `lang` | string | Code of the language the label of the method must be translated to |
| `sqlfilters` | string | SQL criteria to filter. Syntax example "(t.code:=:'CHQ')" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/units`

Get the list of measuring units. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Measuring unit is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/legal_form`

Get the list of legal form of business. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `country` | integer | To filter on country |
| `active` | integer | Lega form is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/staff`

Get the list of staff. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Staff is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/socialnetworks`

Get the list of social networks. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Social network is active or not |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/ticket_categories`

Get the list of tickets categories. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Payment term is active or not |
| `lang` | string | Code of the language the label of the category must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/ticket_severities`

Get the list of tickets severity. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Payment term is active or not |
| `lang` | string | Code of the language the label of the severity must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/ticket_types`

Get the list of tickets types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Payment term is active or not |
| `lang` | string | Code of the language the label of the type must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/thirdparty_types`

Get the list of thirdparties types. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Type is active or not |
| `lang` | string | Code of the language the label of the type must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/incoterms`

Get the list of incoterms. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Payment term is active or not |
| `lang` | string | Code of the language the label of the type must be translated to |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/dictionary/vat`

Get the list of vat. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Number of items per page |
| `page` | integer | Page number (starting from zero) |
| `active` | integer | Vat is active or not (-1 all, 0 = inactive, 1 = active) |
| `fk_country` | integer | Country of vat (if -1 we use company country, 0 = all) |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.code:like:'A%') and (t.active:>=:0)" |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/company`

Get properties of company 🔐

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/establishments`

Get the list of establishments. 🔐

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/establishments/{id}`

Get establishment by ID. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of establishment |

**Réponse :** Objet JSON.

#### `GET /setup/conf/{constantname}`

Get value of a setup variables 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `constantname` | string | Name of conf variable to get |

**Réponse :** Objet JSON.

#### `GET /setup/conf`

Get all setup variables 🔐

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/checkintegrity`

Do a test of integrity for files and setup. 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `target` | string | Can be 'local' or 'default' or Url of the signatures file to use for the test. Must be reachable by the tested Dolibarr. |

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/modules`

Get list of enabled modules 🔐

**Exemple d'URL avec filtres :**
`GET /setup?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

#### `GET /setup/modules/status/{origin}`

Get list of modules with status and origin 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `origin` | string | Origin of the module (all, core, external) |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `status` | string | "all", "active", "disabled" |

**Réponse :** Objet JSON.

### ✏️ POST (Création)

#### `POST /setup/extrafields/{elementtype}/{attrname}`

Create Extrafield object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `attrname` | string | extrafield attrname |
| `elementtype` | string | extrafield elementtype |

**Body nécessaire (JSON) :** Voir documentation Swagger.

**Réponse :** ID ou objet créé.

### 🔄 PUT (Modification)

#### `PUT /setup/extrafields/{elementtype}/{attrname}`

Update Extrafield object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `attrname` | string | extrafield attrname |
| `elementtype` | string | extrafield elementtype |

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

#### `PUT /setup/modules/{modulename}/enable`

PUT enable module 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `modulename` | string | name of the module |

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

#### `PUT /setup/modules/{modulename}/disable`

PUT enable module 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `modulename` | string | name of the module |

**Body (JSON) :** Envoyer uniquement les champs à modifier.

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /setup/extrafields/{elementtype}/{attrname}`

Delete extrafield 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `attrname` | string | extrafield attrname |
| `elementtype` | string | extrafield elementtype |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

---

## shipments

**Expéditions / Livraisons**

### 🔍 GET (Lecture)

#### `GET /shipments/{id}`

Get properties of a shipment object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of shipment |

**Exemple de réponse (JSON) :**

```json
{
  "user_author_id": "...",
  "fk_user_author": "...",
  "fk_user_valid": "...",
  "socid": "...",
  "ref_client": "...",
  "ref_customer": "...",
  "entrepot_id": "...",
  "tracking_number": "...",
  "tracking_url": "...",
  "billed": "...",
  "trueWeight": "...",
  "weight_units": "...",
  "trueWidth": "...",
  "width_units": "...",
  "trueHeight": "...",
  "height_units": "...",
  "trueDepth": "...",
  "depth_units": "...",
  "trueSize": "...",
  "livraison_id": "...",
  "multicurrency_subprice": "...",
  "size_units": "...",
  "sizeH": "...",
  "sizeS": "...",
  "sizeW": "...",
  "weight": "...",
  "date_delivery": "...",
  "date": "...",
  "date_expedition": "...",
  "date_shipping": "...",
  "date_valid": "...",
  "meths": "...",
  "listmeths": "...",
  "commande_id": "...",
  "commande": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "multicurrency_tx": "...",
  "multicurrency_total_ht": "...",
  "multicurrency_total_tva": "...",
  "multicurrency_total_ttc": "..."
}
```

#### `GET /shipments`

List shipments 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `thirdparty_ids` | string | Thirdparty ids to filter shipments of (example '1' or '1,2,3') |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /shipments?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "user_author_id": "...",
    "fk_user_author": "...",
    "fk_user_valid": "...",
    "socid": "...",
    "ref_client": "...",
    "ref_customer": "...",
    "entrepot_id": "...",
    "tracking_number": "...",
    "tracking_url": "...",
    "billed": "...",
    "trueWeight": "...",
    "weight_units": "...",
    "trueWidth": "...",
    "width_units": "...",
    "trueHeight": "...",
    "height_units": "...",
    "trueDepth": "...",
    "depth_units": "...",
    "trueSize": "...",
    "livraison_id": "...",
    "multicurrency_subprice": "...",
    "size_units": "...",
    "sizeH": "...",
    "sizeS": "...",
    "sizeW": "...",
    "weight": "...",
    "date_delivery": "...",
    "date": "...",
    "date_expedition": "...",
    "date_shipping": "...",
    "date_valid": "...",
    "meths": "...",
    "listmeths": "...",
    "commande_id": "...",
    "commande": "...",
    "fk_multicurrency": "...",
    "multicurrency_code": "...",
    "multicurrency_tx": "...",
    "multicurrency_total_ht": "...",
    "multicurrency_total_tva": "...",
    "multicurrency_total_ttc": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /shipments`

Create shipment object 🔐

**Body nécessaire (JSON) :**

```json
{
  "user_author_id": "",
  "fk_user_author": "",
  "fk_user_valid": "",
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "entrepot_id": "",
  "tracking_number": "",
  "tracking_url": "",
  "billed": "",
  "trueWeight": "",
  "weight_units": "",
  "trueWidth": "",
  "width_units": "",
  "trueHeight": "",
  "height_units": "",
  "trueDepth": "",
  "depth_units": "",
  "trueSize": "",
  "livraison_id": "",
  "multicurrency_subprice": "",
  "size_units": "",
  "sizeH": "",
  "sizeS": "",
  "sizeW": "",
  "weight": "",
  "date_delivery": "",
  "date": "",
  "date_expedition": "",
  "date_shipping": "",
  "date_valid": "",
  "meths": "",
  "listmeths": "",
  "commande_id": "",
  "commande": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /shipments/{id}/validate`

Validate a shipment 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Shipment ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /shipments/{id}/close`

Close a shipment (Classify it as "Delivered") 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Expedition ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet fermé.

### 🔄 PUT (Modification)

#### `PUT /shipments/{id}`

Update shipment general fields (won't touch lines of shipment) 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of shipment to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "user_author_id": "",
  "fk_user_author": "",
  "fk_user_valid": "",
  "socid": "",
  "ref_client": "",
  "ref_customer": "",
  "entrepot_id": "",
  "tracking_number": "",
  "tracking_url": "",
  "billed": "",
  "trueWeight": "",
  "weight_units": "",
  "trueWidth": "",
  "width_units": "",
  "trueHeight": "",
  "height_units": "",
  "trueDepth": "",
  "depth_units": "",
  "trueSize": "",
  "livraison_id": "",
  "multicurrency_subprice": "",
  "size_units": "",
  "sizeH": "",
  "sizeS": "",
  "sizeW": "",
  "weight": "",
  "date_delivery": "",
  "date": "",
  "date_expedition": "",
  "date_shipping": "",
  "date_valid": "",
  "meths": "",
  "listmeths": "",
  "commande_id": "",
  "commande": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /shipments/{id}`

Delete shipment 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Shipment ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /shipments/{id}/lines/{lineid}`

Delete a line to given shipment 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of shipment to update |
| `lineid` | integer | Id of line to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `user_author_id` |  |
| `fk_user_author` |  |
| `fk_user_valid` |  |
| `socid` |  |
| `ref_client` |  |
| `ref_customer` |  |
| `entrepot_id` |  |
| `tracking_number` |  |
| `tracking_url` |  |
| `billed` |  |
| `trueWeight` |  |
| `weight_units` |  |
| `trueWidth` |  |
| `width_units` |  |
| `trueHeight` |  |
| `height_units` |  |
| `trueDepth` |  |
| `depth_units` |  |
| `trueSize` |  |
| `livraison_id` |  |
| `multicurrency_subprice` |  |
| `size_units` |  |
| `sizeH` |  |
| `sizeS` |  |
| `sizeW` |  |
| `weight` |  |
| `date_delivery` |  |
| `date` |  |
| `date_expedition` |  |
| `date_shipping` |  |
| `date_valid` |  |
| `meths` |  |
| `listmeths` |  |
| `commande_id` |  |
| `commande` |  |
| `fk_multicurrency` |  |
| `multicurrency_code` |  |
| `multicurrency_tx` |  |
| `multicurrency_total_ht` |  |
| `multicurrency_total_tva` |  |
| `multicurrency_total_ttc` |  |

---

## status

**État de l'API**

### 🔍 GET (Lecture)

#### `GET /status`

Get status (Dolibarr version) 🔐

**Exemple d'URL avec filtres :**
`GET /status?sortfield=t.rowid&sortorder=ASC&limit=100`

**Réponse :** Tableau (Array) de données JSON.

---

## stockmovements

**Mouvements de stock**

### 🔍 GET (Lecture)

#### `GET /stockmovements/{id}`

Get properties of a stock movement object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of stock movement |

**Exemple de réponse (JSON) :**

```json
{
  "product_id": "...",
  "entrepot_id": "...",
  "warehouse_id": "...",
  "qty": "...",
  "type": "...",
  "datem": "...",
  "price": "...",
  "fk_user_author": "...",
  "label": "...",
  "fk_origin": "...",
  "origin_id": "...",
  "origintype": "...",
  "origin_type": "...",
  "line_id_oject_src": "...",
  "line_id_oject_origin": "...",
  "inventorycode": "...",
  "movementcode": "...",
  "batch": "...",
  "line_id_object_src": "...",
  "line_id_object_origin": "...",
  "eatby": "...",
  "sellby": "..."
}
```

#### `GET /stockmovements`

Get a list of stock movements 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.fk_product:=:1) and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /stockmovements?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "product_id": "...",
    "entrepot_id": "...",
    "warehouse_id": "...",
    "qty": "...",
    "type": "...",
    "datem": "...",
    "price": "...",
    "fk_user_author": "...",
    "label": "...",
    "fk_origin": "...",
    "origin_id": "...",
    "origintype": "...",
    "origin_type": "...",
    "line_id_oject_src": "...",
    "line_id_oject_origin": "...",
    "inventorycode": "...",
    "movementcode": "...",
    "batch": "...",
    "line_id_object_src": "...",
    "line_id_object_origin": "...",
    "eatby": "...",
    "sellby": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /stockmovements`

Create a stock movement 🔐

**Body nécessaire (JSON) :**

```json
{
  "product_id": "",
  "entrepot_id": "",
  "warehouse_id": "",
  "qty": "",
  "type": "",
  "datem": "",
  "price": "",
  "fk_user_author": "",
  "label": "",
  "fk_origin": "",
  "origin_id": "",
  "origintype": "",
  "origin_type": "",
  "line_id_oject_src": "",
  "line_id_oject_origin": "",
  "inventorycode": "",
  "movementcode": "",
  "batch": "",
  "line_id_object_src": "",
  "line_id_object_origin": "",
  "eatby": "",
  "sellby": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `product_id` |  |
| `entrepot_id` |  |
| `warehouse_id` |  |
| `qty` |  |
| `type` |  |
| `datem` |  |
| `price` |  |
| `fk_user_author` |  |
| `label` |  |
| `fk_origin` |  |
| `origin_id` |  |
| `origintype` |  |
| `origin_type` |  |
| `line_id_oject_src` |  |
| `line_id_oject_origin` |  |
| `inventorycode` |  |
| `movementcode` |  |
| `batch` |  |
| `line_id_object_src` |  |
| `line_id_object_origin` |  |
| `eatby` |  |
| `sellby` |  |

---

## subscriptions

**Abonnements / Cotisations**

### 🔍 GET (Lecture)

#### `GET /subscriptions/{id}`

Get properties of a subscription object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of subscription |

**Exemple de réponse (JSON) :**

```json
{
  "datec": "...",
  "datem": "...",
  "dateh": "...",
  "datef": "...",
  "fk_type": "...",
  "fk_adherent": "...",
  "amount": "...",
  "fk_bank": "..."
}
```

#### `GET /subscriptions`

List subscriptions 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.import_key:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /subscriptions?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "datec": "...",
    "datem": "...",
    "dateh": "...",
    "datef": "...",
    "fk_type": "...",
    "fk_adherent": "...",
    "amount": "...",
    "fk_bank": "..."
  }
]
```

### ✏️ POST (Création)

#### `POST /subscriptions`

Create subscription object 🔐

**Body nécessaire (JSON) :**

```json
{
  "datec": "",
  "datem": "",
  "dateh": "",
  "datef": "",
  "fk_type": "",
  "fk_adherent": "",
  "amount": "",
  "fk_bank": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /subscriptions/{id}`

Update subscription 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of subscription to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "datec": "",
  "datem": "",
  "dateh": "",
  "datef": "",
  "fk_type": "",
  "fk_adherent": "",
  "amount": "",
  "fk_bank": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /subscriptions/{id}`

Delete subscription 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of subscription to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `datec` |  |
| `datem` |  |
| `dateh` |  |
| `datef` |  |
| `fk_type` |  |
| `fk_adherent` |  |
| `amount` |  |
| `fk_bank` |  |

---

## supplierinvoices

**Factures fournisseurs**

### 🔍 GET (Lecture)

#### `GET /supplierinvoices/{id}`

Get properties of a supplier invoice object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of supplier invoice |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "ref_supplier": "...",
  "libelle": "...",
  "label": "...",
  "type": "...",
  "statut": "...",
  "status": "...",
  "fk_statut": "...",
  "paye": "...",
  "paid": "...",
  "author": "...",
  "fk_user_valid": "...",
  "datec": "...",
  "date_echeance": "...",
  "amount": "...",
  "remise": "...",
  "tva": "...",
  "localtax1": "...",
  "localtax2": "...",
  "total_ht": "...",
  "total_tva": "...",
  "total_localtax1": "...",
  "total_localtax2": "...",
  "total_ttc": "...",
  "note_private": "...",
  "note_public": "...",
  "propalid": "...",
  "fk_account": "...",
  "transport_mode_id": "...",
  "vat_reverse_charge": "...",
  "extraparams": "...",
  "fournisseur": "...",
  "fk_facture_source": "...",
  "fac_rec": "...",
  "fk_fac_rec_source": "..."
}
```

#### `GET /supplierinvoices`

List invoices 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `thirdparty_ids` | string | Thirdparty ids to filter invoices of (example '1' or '1,2,3') |
| `status` | string | Filter by invoice status : draft | unpaid | paid | cancelled |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.datec:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /supplierinvoices?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "ref": "...",
    "ref_supplier": "...",
    "libelle": "...",
    "label": "...",
    "type": "...",
    "statut": "...",
    "status": "...",
    "fk_statut": "...",
    "paye": "...",
    "paid": "...",
    "author": "...",
    "fk_user_valid": "...",
    "datec": "...",
    "date_echeance": "...",
    "amount": "...",
    "remise": "...",
    "tva": "...",
    "localtax1": "...",
    "localtax2": "...",
    "total_ht": "...",
    "total_tva": "...",
    "total_localtax1": "...",
    "total_localtax2": "...",
    "total_ttc": "...",
    "note_private": "...",
    "note_public": "...",
    "propalid": "...",
    "fk_account": "...",
    "transport_mode_id": "...",
    "vat_reverse_charge": "...",
    "extraparams": "...",
    "fournisseur": "...",
    "fk_facture_source": "...",
    "fac_rec": "...",
    "fk_fac_rec_source": "..."
  }
]
```

#### `GET /supplierinvoices/{id}/payments`

Get list of payments of a given supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of SupplierInvoice |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "ref_supplier": "...",
  "libelle": "...",
  "label": "...",
  "type": "...",
  "statut": "...",
  "status": "...",
  "fk_statut": "...",
  "paye": "...",
  "paid": "...",
  "author": "...",
  "fk_user_valid": "...",
  "datec": "...",
  "date_echeance": "...",
  "amount": "...",
  "remise": "...",
  "tva": "...",
  "localtax1": "...",
  "localtax2": "...",
  "total_ht": "...",
  "total_tva": "...",
  "total_localtax1": "...",
  "total_localtax2": "...",
  "total_ttc": "...",
  "note_private": "...",
  "note_public": "...",
  "propalid": "...",
  "fk_account": "...",
  "transport_mode_id": "...",
  "vat_reverse_charge": "...",
  "extraparams": "...",
  "fournisseur": "...",
  "fk_facture_source": "...",
  "fac_rec": "...",
  "fk_fac_rec_source": "..."
}
```

#### `GET /supplierinvoices/{id}/lines`

Get lines of a supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "ref_supplier": "...",
  "libelle": "...",
  "label": "...",
  "type": "...",
  "statut": "...",
  "status": "...",
  "fk_statut": "...",
  "paye": "...",
  "paid": "...",
  "author": "...",
  "fk_user_valid": "...",
  "datec": "...",
  "date_echeance": "...",
  "amount": "...",
  "remise": "...",
  "tva": "...",
  "localtax1": "...",
  "localtax2": "...",
  "total_ht": "...",
  "total_tva": "...",
  "total_localtax1": "...",
  "total_localtax2": "...",
  "total_ttc": "...",
  "note_private": "...",
  "note_public": "...",
  "propalid": "...",
  "fk_account": "...",
  "transport_mode_id": "...",
  "vat_reverse_charge": "...",
  "extraparams": "...",
  "fournisseur": "...",
  "fk_facture_source": "...",
  "fac_rec": "...",
  "fk_fac_rec_source": "..."
}
```

### ✏️ POST (Création)

#### `POST /supplierinvoices`

Create supplier invoice object 🔐

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierinvoices/{id}/validate`

Validate an invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Invoice ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /supplierinvoices/{id}/settodraft`

Sets an invoice as draft 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierinvoices/{id}/payments`

Add payment line to a specific supplier invoice with the remain to pay as amount. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of invoice |

**Body nécessaire (JSON) :**

```json
{
  "datepaye": 1709856000,       // Date du paiement (timestamp Unix)
  "paiementtype": "VIR",         // Mode: VIR (virement), CHQ (chèque), CB, LIQ, etc.
  "chid": 5,                     // ID du salaire / facture à payer
  "amounts": { "5": 1500.00 },   // { "ID_salaire": montant_payé }
  "accountid": 1,                 // ID du compte bancaire (OBLIGATOIRE)
  "num_payment": "",              // Numéro de paiement (optionnel)
  "comment": ""                   // Commentaire (optionnel)
}
```

**Réponse :** `int` — ID du paiement créé.

#### `POST /supplierinvoices/{id}/settopaid`

Sets a supplier invoice as paid 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Supplier invoice ID |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierinvoices/{id}/settounpaid`

Sets a supplier invoice as unpaid 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Supplier invoice ID |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierinvoices/{id}/lines`

Add a line to given supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice to update |

**Body nécessaire (JSON) :**

```json
{
  "request_data": { /* champs de la ligne */ }
}
```

**Réponse :** `int` — ID de la ligne créée.

### 🔄 PUT (Modification)

#### `PUT /supplierinvoices/{id}`

Update supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /supplierinvoices/{id}/lines/{lineid}`

Update a line to a given supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice to update |
| `lineid` | integer | Id of line to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "libelle": "",
  "label": "",
  "type": "",
  "statut": "",
  "status": "",
  "fk_statut": "",
  "paye": "",
  "paid": "",
  "author": "",
  "fk_user_valid": "",
  "datec": "",
  "date_echeance": "",
  "amount": "",
  "remise": "",
  "tva": "",
  "localtax1": "",
  "localtax2": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "note_private": "",
  "note_public": "",
  "propalid": "",
  "fk_account": "",
  "transport_mode_id": "",
  "vat_reverse_charge": "",
  "extraparams": "",
  "fournisseur": "",
  "fk_facture_source": "",
  "fac_rec": "",
  "fk_fac_rec_source": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /supplierinvoices/{id}`

Delete supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Supplier invoice ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /supplierinvoices/{id}/lines/{lineid}`

Deletes a line of a given supplier invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier invoice |
| `lineid` | integer | Id of the line to delete |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `ref` |  |
| `ref_supplier` |  |
| `libelle` |  |
| `label` |  |
| `type` |  |
| `statut` |  |
| `status` |  |
| `fk_statut` |  |
| `paye` |  |
| `paid` |  |
| `author` |  |
| `fk_user_valid` |  |
| `datec` |  |
| `date_echeance` |  |
| `amount` |  |
| `remise` |  |
| `tva` |  |
| `localtax1` |  |
| `localtax2` |  |
| `total_ht` |  |
| `total_tva` |  |
| `total_localtax1` |  |
| `total_localtax2` |  |
| `total_ttc` |  |
| `note_private` |  |
| `note_public` |  |
| `propalid` |  |
| `fk_account` |  |
| `transport_mode_id` |  |
| `vat_reverse_charge` |  |
| `extraparams` |  |
| `fournisseur` |  |
| `fk_facture_source` |  |
| `fac_rec` |  |
| `fk_fac_rec_source` |  |

---

## supplierorders

**Commandes fournisseurs**

### 🔍 GET (Lecture)

#### `GET /supplierorders/{id}`

Get properties of a supplier order object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of supplier order |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "ref_supplier": "...",
  "ref_fourn": "...",
  "statut": "...",
  "billed": "...",
  "socid": "...",
  "fourn_id": "...",
  "date": "...",
  "date_valid": "...",
  "date_approve": "...",
  "date_approve2": "...",
  "date_commande": "...",
  "remise_percent": "...",
  "methode_commande_id": "...",
  "methode_commande": "...",
  "delivery_date": "...",
  "total_ht": "...",
  "total_tva": "...",
  "total_localtax1": "...",
  "total_localtax2": "...",
  "total_ttc": "...",
  "source": "...",
  "cond_reglement_id": "...",
  "cond_reglement_code": "...",
  "cond_reglement_label": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "mode_reglement": "...",
  "user_author_id": "...",
  "user_approve_id": "...",
  "user_approve_id2": "...",
  "refuse_note": "...",
  "extraparams": "...",
  "line": "...",
  "origin": "...",
  "origin_id": "...",
  "date_lim_reglement": "...",
  "receptions": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "multicurrency_tx": "...",
  "multicurrency_total_ht": "...",
  "multicurrency_total_tva": "...",
  "multicurrency_total_ttc": "..."
}
```

#### `GET /supplierorders`

List orders 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `thirdparty_ids` | string | Thirdparty ids to filter orders of (example '1' or '1,2,3') |
| `product_ids` | string | Product ids to filter orders of (example '1' or '1,2,3') |
| `status` | string | Filter by order status : draft | validated | approved | running | received_start | received_end | cancelled | refused |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.datec:<:'20160101')" |
| `sqlfilterlines` | string | Other criteria to filter answers separated by a comma. Syntax example "(tl.fk_product:=:'17') and (tl.price:<:'250')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /supplierorders?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "ref": "...",
    "ref_supplier": "...",
    "ref_fourn": "...",
    "statut": "...",
    "billed": "...",
    "socid": "...",
    "fourn_id": "...",
    "date": "...",
    "date_valid": "...",
    "date_approve": "...",
    "date_approve2": "...",
    "date_commande": "...",
    "remise_percent": "...",
    "methode_commande_id": "...",
    "methode_commande": "...",
    "delivery_date": "...",
    "total_ht": "...",
    "total_tva": "...",
    "total_localtax1": "...",
    "total_localtax2": "...",
    "total_ttc": "...",
    "source": "...",
    "cond_reglement_id": "...",
    "cond_reglement_code": "...",
    "cond_reglement_label": "...",
    "cond_reglement_doc": "...",
    "deposit_percent": "...",
    "fk_account": "...",
    "mode_reglement_id": "...",
    "mode_reglement_code": "...",
    "mode_reglement": "...",
    "user_author_id": "...",
    "user_approve_id": "...",
    "user_approve_id2": "...",
    "refuse_note": "...",
    "extraparams": "...",
    "line": "...",
    "origin": "...",
    "origin_id": "...",
    "date_lim_reglement": "...",
    "receptions": "...",
    "fk_multicurrency": "...",
    "multicurrency_code": "...",
    "multicurrency_tx": "...",
    "multicurrency_total_ht": "...",
    "multicurrency_total_tva": "...",
    "multicurrency_total_ttc": "..."
  }
]
```

#### `GET /supplierorders/{id}/contacts`

Get contacts of given supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of supplier order |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `source` | string | Source of the contact (internal, external, all). |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER, SALESREPFOLL, ...) |

**Exemple de réponse (JSON) :**

```json
{
  "ref": "...",
  "ref_supplier": "...",
  "ref_fourn": "...",
  "statut": "...",
  "billed": "...",
  "socid": "...",
  "fourn_id": "...",
  "date": "...",
  "date_valid": "...",
  "date_approve": "...",
  "date_approve2": "...",
  "date_commande": "...",
  "remise_percent": "...",
  "methode_commande_id": "...",
  "methode_commande": "...",
  "delivery_date": "...",
  "total_ht": "...",
  "total_tva": "...",
  "total_localtax1": "...",
  "total_localtax2": "...",
  "total_ttc": "...",
  "source": "...",
  "cond_reglement_id": "...",
  "cond_reglement_code": "...",
  "cond_reglement_label": "...",
  "cond_reglement_doc": "...",
  "deposit_percent": "...",
  "fk_account": "...",
  "mode_reglement_id": "...",
  "mode_reglement_code": "...",
  "mode_reglement": "...",
  "user_author_id": "...",
  "user_approve_id": "...",
  "user_approve_id2": "...",
  "refuse_note": "...",
  "extraparams": "...",
  "line": "...",
  "origin": "...",
  "origin_id": "...",
  "date_lim_reglement": "...",
  "receptions": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "multicurrency_tx": "...",
  "multicurrency_total_ht": "...",
  "multicurrency_total_tva": "...",
  "multicurrency_total_ttc": "..."
}
```

### ✏️ POST (Création)

#### `POST /supplierorders`

Create supplier order object 🔐

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierorders/{id}/lines`

Add a line to a given supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of order to update |

**Body nécessaire (JSON) :**

```json
{
  "request_data": { /* champs de la ligne */ }
}
```

**Réponse :** `int` — ID de la ligne créée.

#### `POST /supplierorders/{id}/contact/{contactid}/{type}/{source}`

Add a contact type of given supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier order to update |
| `contactid` | integer | Id of contact/user to add |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER, SALESREPFOLL, ...) |
| `source` | string | Source of the contact (external, internal) |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierorders/{id}/validate`

Validate an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :** `{}` (aucun body nécessaire)

**Réponse :** Objet validé.

#### `POST /supplierorders/{id}/approve`

Approve an order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierorders/{id}/makeorder`

Sends an order to the vendor 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /supplierorders/{id}/receive`

Receives the order, dispatches products. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Order ID |

**Body nécessaire (JSON) :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /supplierorders/{id}`

Update supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier order to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "ref": "",
  "ref_supplier": "",
  "ref_fourn": "",
  "statut": "",
  "billed": "",
  "socid": "",
  "fourn_id": "",
  "date": "",
  "date_valid": "",
  "date_approve": "",
  "date_approve2": "",
  "date_commande": "",
  "remise_percent": "",
  "methode_commande_id": "",
  "methode_commande": "",
  "delivery_date": "",
  "total_ht": "",
  "total_tva": "",
  "total_localtax1": "",
  "total_localtax2": "",
  "total_ttc": "",
  "source": "",
  "cond_reglement_id": "",
  "cond_reglement_code": "",
  "cond_reglement_label": "",
  "cond_reglement_doc": "",
  "deposit_percent": "",
  "fk_account": "",
  "mode_reglement_id": "",
  "mode_reglement_code": "",
  "mode_reglement": "",
  "user_author_id": "",
  "user_approve_id": "",
  "user_approve_id2": "",
  "refuse_note": "",
  "extraparams": "",
  "line": "",
  "origin": "",
  "origin_id": "",
  "date_lim_reglement": "",
  "receptions": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "multicurrency_tx": "",
  "multicurrency_total_ht": "",
  "multicurrency_total_tva": "",
  "multicurrency_total_ttc": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /supplierorders/{id}`

Delete supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Supplier order ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /supplierorders/{id}/contact/{contactid}/{type}/{source}`

Unlink a contact type of given supplier order 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of supplier order to update |
| `contactid` | integer | Id of contact/user to add |
| `type` | string | Type of the contact (BILLING, SHIPPING, CUSTOMER, SALESREPFOLL, ...). |
| `source` | string | Source of the contact (internal, external). |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `ref` |  |
| `ref_supplier` |  |
| `ref_fourn` |  |
| `statut` |  |
| `billed` |  |
| `socid` |  |
| `fourn_id` |  |
| `date` |  |
| `date_valid` |  |
| `date_approve` |  |
| `date_approve2` |  |
| `date_commande` |  |
| `remise_percent` |  |
| `methode_commande_id` |  |
| `methode_commande` |  |
| `delivery_date` |  |
| `total_ht` |  |
| `total_tva` |  |
| `total_localtax1` |  |
| `total_localtax2` |  |
| `total_ttc` |  |
| `source` |  |
| `cond_reglement_id` |  |
| `cond_reglement_code` |  |
| `cond_reglement_label` |  |
| `cond_reglement_doc` |  |
| `deposit_percent` |  |
| `fk_account` |  |
| `mode_reglement_id` |  |
| `mode_reglement_code` |  |
| `mode_reglement` |  |
| `user_author_id` |  |
| `user_approve_id` |  |
| `user_approve_id2` |  |
| `refuse_note` |  |
| `extraparams` |  |
| `line` |  |
| `origin` |  |
| `origin_id` |  |
| `date_lim_reglement` |  |
| `receptions` |  |
| `fk_multicurrency` |  |
| `multicurrency_code` |  |
| `multicurrency_tx` |  |
| `multicurrency_total_ht` |  |
| `multicurrency_total_tva` |  |
| `multicurrency_total_ttc` |  |

---

## thirdparties

**Tiers (Clients, Fournisseurs)**

### 🔍 GET (Lecture)

#### `GET /thirdparties/{id}`

Get a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party to load |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/email/{email}`

Get properties of a third party by email. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `email` | string | Email of the third party to load |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/barcode/{barcode}`

Get a third party by barcode. 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `barcode` | string | Barcode of the third party |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties`

List third parties 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | S ort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |
| `mode` | integer | Set to 0 to show all third parties, Set to 1 to show only customers, 2 for prospects, 3 for neither customer or prospect, 4 for suppliers |
| `category` | integer | Use this param to filter the list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "((t.nom:like:'TheCompany%') or (t.name_alias:like:'TheCompany%')) and (t.datec:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /thirdparties?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "fieldsforcombobox": "...",
    "SupplierCategories": "...",
    "prefixCustomerIsRequired": "...",
    "nom": "...",
    "name": "...",
    "name_alias": "...",
    "particulier": "...",
    "status": "...",
    "region_code": "...",
    "region": "...",
    "country_id": "...",
    "departement_code": "...",
    "departement": "...",
    "pays": "...",
    "phone": "...",
    "phone_mobile": "...",
    "fax": "...",
    "email": "...",
    "no_email": "...",
    "skype": "...",
    "twitter": "...",
    "facebook": "...",
    "linkedin": "...",
    "url": "...",
    "barcode": "...",
    "idprof1": "...",
    "siren": "...",
    "idprof2": "...",
    "siret": "...",
    "idprof3": "...",
    "ape": "...",
    "idprof4": "...",
    "idprof5": "...",
    "idprof6": "...",
    "idprof7": "...",
    "idprof8": "...",
    "idprof9": "...",
    "idprof10": "...",
    "socialobject": "...",
    "prefix_comm": "...",
    "tva_assuj": "...",
    "tva_intra": "...",
    "vat_reverse_charge": "...",
    "localtax1_assuj": "...",
    "localtax1_value": "...",
    "localtax2_assuj": "...",
    "localtax2_value": "...",
    "managers": "...",
    "capital": "...",
    "typent_id": "...",
    "typent_code": "...",
    "effectif": "...",
    "effectif_id": "...",
    "forme_juridique_code": "...",
    "forme_juridique": "...",
    "birth": "...",
    "remise_percent": "...",
    "remise_supplier_percent": "...",
    "mode_reglement_id": "...",
    "cond_reglement_id": "...",
    "deposit_percent": "...",
    "mode_reglement_supplier_id": "...",
    "cond_reglement_supplier_id": "...",
    "transport_mode_supplier_id": "...",
    "fk_prospectlevel": "...",
    "name_bis": "...",
    "user_modification": "...",
    "user_creation": "...",
    "client": "...",
    "prospect": "...",
    "fournisseur": "...",
    "code_client": "...",
    "code_fournisseur": "...",
    "code_compta_client": "...",
    "accountancy_code_customer_general": "...",
    "accountancy_code_customer": "...",
    "code_compta_fournisseur": "...",
    "accountancy_code_supplier_general": "...",
    "accountancy_code_supplier": "...",
    "code_compta_product": "...",
    "note_private": "...",
    "note_public": "...",
    "stcomm_id": "...",
    "stcomm_picto": "...",
    "status_prospect_label": "...",
    "price_level": "...",
    "outstanding_limit": "...",
    "order_min_amount": "...",
    "supplier_order_min_amount": "...",
    "commercial_id": "...",
    "parent": "...",
    "default_lang": "...",
    "ref": "...",
    "ref_ext": "...",
    "ip": "...",
    "webservices_url": "...",
    "webservices_key": "...",
    "logo": "...",
    "logo_small": "...",
    "logo_mini": "...",
    "logo_squarred": "...",
    "logo_squarred_small": "...",
    "logo_squarred_mini": "...",
    "accountancy_code_sell": "...",
    "accountancy_code_buy": "...",
    "currency_code": "...",
    "fk_multicurrency": "...",
    "multicurrency_code": "...",
    "fk_warehouse": "...",
    "termsofsale": "...",
    "partnerships": "...",
    "bank_account": "...",
    "code_compta": "..."
  }
]
```

#### `GET /thirdparties/{id}/categories`

Get customer categories for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/supplier_categories`

Get supplier categories for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | List limit |
| `page` | integer | Page number |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/outstandingproposals`

Get outstanding proposals for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `mode` | string | 'customer' or 'supplier' |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/outstandingorders`

Get outstanding orders for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `mode` | string | 'customer' or 'supplier' |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/outstandinginvoices`

Get outstanding invoices for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `mode` | string | 'customer' or 'supplier' |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/representatives`

Get representatives of a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `mode` | integer | 0=Array with properties, 1=Array of id. |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/fixedamountdiscounts`

Get fixed amount discount of a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `mode` | string | 'customer' or 'supplier' |
| `filter` | string | Filter exceptional discount. "none" will return every discount, "available" returns unapplied discounts, "used" returns applied discounts |
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/getinvoicesqualifiedforreplacement`

Return invoices qualified to be replaced by another invoice 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of a third party |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/getinvoicesqualifiedforcreditnote`

Return invoices qualified to be corrected by a credit note 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of a third party |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/notifications`

Get company notifications for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/bankaccounts`

Get company bank accounts of a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/generateBankAccountDocument/{companybankid}/{model}`

Generate a document from a bank account record 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `companybankid` | integer | ID of company bank |
| `model` | string | Model of document to generate |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/{id}/accounts`

Get a specific account attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `site` | string | Site key |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

#### `GET /thirdparties/accounts/{site}/{key_account}`

Get a specific third party by account 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `site` | string | Site key |
| `key_account` | string | Key of the account |

**Exemple de réponse (JSON) :**

```json
{
  "fieldsforcombobox": "...",
  "SupplierCategories": "...",
  "prefixCustomerIsRequired": "...",
  "nom": "...",
  "name": "...",
  "name_alias": "...",
  "particulier": "...",
  "status": "...",
  "region_code": "...",
  "region": "...",
  "country_id": "...",
  "departement_code": "...",
  "departement": "...",
  "pays": "...",
  "phone": "...",
  "phone_mobile": "...",
  "fax": "...",
  "email": "...",
  "no_email": "...",
  "skype": "...",
  "twitter": "...",
  "facebook": "...",
  "linkedin": "...",
  "url": "...",
  "barcode": "...",
  "idprof1": "...",
  "siren": "...",
  "idprof2": "...",
  "siret": "...",
  "idprof3": "...",
  "ape": "...",
  "idprof4": "...",
  "idprof5": "...",
  "idprof6": "...",
  "idprof7": "...",
  "idprof8": "...",
  "idprof9": "...",
  "idprof10": "...",
  "socialobject": "...",
  "prefix_comm": "...",
  "tva_assuj": "...",
  "tva_intra": "...",
  "vat_reverse_charge": "...",
  "localtax1_assuj": "...",
  "localtax1_value": "...",
  "localtax2_assuj": "...",
  "localtax2_value": "...",
  "managers": "...",
  "capital": "...",
  "typent_id": "...",
  "typent_code": "...",
  "effectif": "...",
  "effectif_id": "...",
  "forme_juridique_code": "...",
  "forme_juridique": "...",
  "birth": "...",
  "remise_percent": "...",
  "remise_supplier_percent": "...",
  "mode_reglement_id": "...",
  "cond_reglement_id": "...",
  "deposit_percent": "...",
  "mode_reglement_supplier_id": "...",
  "cond_reglement_supplier_id": "...",
  "transport_mode_supplier_id": "...",
  "fk_prospectlevel": "...",
  "name_bis": "...",
  "user_modification": "...",
  "user_creation": "...",
  "client": "...",
  "prospect": "...",
  "fournisseur": "...",
  "code_client": "...",
  "code_fournisseur": "...",
  "code_compta_client": "...",
  "accountancy_code_customer_general": "...",
  "accountancy_code_customer": "...",
  "code_compta_fournisseur": "...",
  "accountancy_code_supplier_general": "...",
  "accountancy_code_supplier": "...",
  "code_compta_product": "...",
  "note_private": "...",
  "note_public": "...",
  "stcomm_id": "...",
  "stcomm_picto": "...",
  "status_prospect_label": "...",
  "price_level": "...",
  "outstanding_limit": "...",
  "order_min_amount": "...",
  "supplier_order_min_amount": "...",
  "commercial_id": "...",
  "parent": "...",
  "default_lang": "...",
  "ref": "...",
  "ref_ext": "...",
  "ip": "...",
  "webservices_url": "...",
  "webservices_key": "...",
  "logo": "...",
  "logo_small": "...",
  "logo_mini": "...",
  "logo_squarred": "...",
  "logo_squarred_small": "...",
  "logo_squarred_mini": "...",
  "accountancy_code_sell": "...",
  "accountancy_code_buy": "...",
  "currency_code": "...",
  "fk_multicurrency": "...",
  "multicurrency_code": "...",
  "fk_warehouse": "...",
  "termsofsale": "...",
  "partnerships": "...",
  "bank_account": "...",
  "code_compta": "..."
}
```

### ✏️ POST (Création)

#### `POST /thirdparties`

Create a third party 🔐

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/representative/{representative_id}`

Add a customer representative to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `representative_id` | integer | ID of representative |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/splitdiscount/{discountid}`

Split a discount in 2 smaller discount 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the thirdparty |
| `discountid` | integer | ID of a discount coming from a credit note |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/notifications`

Create a company notification for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/notificationsbycode/{code}`

Create a company notification for a third party using action trigger code 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `code` | string | Action Trigger code |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/bankaccounts`

Create a company bank account for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/accounts`

Create and attach a new account to an existing third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

#### `POST /thirdparties/{id}/accounts/{site}`

Create and attach a new (or replace an existing) specific site account for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `site` | string | Site key |

**Body nécessaire (JSON) :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /thirdparties/{id}`

Update third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of thirdparty to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/merge/{idtodelete}`

Merge a third party into another third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of thirdparty to keep (the target third party) |
| `idtodelete` | integer | ID of thirdparty to remove (the third party to delete), once data has been merged into the target third party. |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/setpricelevel/{priceLevel}`

Set a new price level for the given third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of thirdparty |
| `priceLevel` | integer | Price level to apply to thirdparty |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/categories/{category_id}`

Add a customer category to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `category_id` | integer | ID of category |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/supplier_categories/{category_id}`

Add a supplier category to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `category_id` | integer | ID of category |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/notifications/{notification_id}`

Update a company notification for a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `notification_id` | integer | ID of CompanyNotification |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/bankaccounts/{bankaccount_id}`

Update a company bank account of a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `bankaccount_id` | integer | ID of CompanyBankAccount |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /thirdparties/{id}/accounts/{site}`

Update specified values of a specific account attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `site` | string | Site key |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "fieldsforcombobox": "",
  "SupplierCategories": "",
  "prefixCustomerIsRequired": "",
  "nom": "",
  "name": "",
  "name_alias": "",
  "particulier": "",
  "status": "",
  "region_code": "",
  "region": "",
  "country_id": "",
  "departement_code": "",
  "departement": "",
  "pays": "",
  "phone": "",
  "phone_mobile": "",
  "fax": "",
  "email": "",
  "no_email": "",
  "skype": "",
  "twitter": "",
  "facebook": "",
  "linkedin": "",
  "url": "",
  "barcode": "",
  "idprof1": "",
  "siren": "",
  "idprof2": "",
  "siret": "",
  "idprof3": "",
  "ape": "",
  "idprof4": "",
  "idprof5": "",
  "idprof6": "",
  "idprof7": "",
  "idprof8": "",
  "idprof9": "",
  "idprof10": "",
  "socialobject": "",
  "prefix_comm": "",
  "tva_assuj": "",
  "tva_intra": "",
  "vat_reverse_charge": "",
  "localtax1_assuj": "",
  "localtax1_value": "",
  "localtax2_assuj": "",
  "localtax2_value": "",
  "managers": "",
  "capital": "",
  "typent_id": "",
  "typent_code": "",
  "effectif": "",
  "effectif_id": "",
  "forme_juridique_code": "",
  "forme_juridique": "",
  "birth": "",
  "remise_percent": "",
  "remise_supplier_percent": "",
  "mode_reglement_id": "",
  "cond_reglement_id": "",
  "deposit_percent": "",
  "mode_reglement_supplier_id": "",
  "cond_reglement_supplier_id": "",
  "transport_mode_supplier_id": "",
  "fk_prospectlevel": "",
  "name_bis": "",
  "user_modification": "",
  "user_creation": "",
  "client": "",
  "prospect": "",
  "fournisseur": "",
  "code_client": "",
  "code_fournisseur": "",
  "code_compta_client": "",
  "accountancy_code_customer_general": "",
  "accountancy_code_customer": "",
  "code_compta_fournisseur": "",
  "accountancy_code_supplier_general": "",
  "accountancy_code_supplier": "",
  "code_compta_product": "",
  "note_private": "",
  "note_public": "",
  "stcomm_id": "",
  "stcomm_picto": "",
  "status_prospect_label": "",
  "price_level": "",
  "outstanding_limit": "",
  "order_min_amount": "",
  "supplier_order_min_amount": "",
  "commercial_id": "",
  "parent": "",
  "default_lang": "",
  "ref": "",
  "ref_ext": "",
  "ip": "",
  "webservices_url": "",
  "webservices_key": "",
  "logo": "",
  "logo_small": "",
  "logo_mini": "",
  "logo_squarred": "",
  "logo_squarred_small": "",
  "logo_squarred_mini": "",
  "accountancy_code_sell": "",
  "accountancy_code_buy": "",
  "currency_code": "",
  "fk_multicurrency": "",
  "multicurrency_code": "",
  "fk_warehouse": "",
  "termsofsale": "",
  "partnerships": "",
  "bank_account": "",
  "code_compta": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /thirdparties/{id}`

Delete a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/representative/{representative_id}`

Remove the link between a customer representative and a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `representative_id` | integer | ID of representative |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/categories/{category_id}`

Remove the link between a customer category and the third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `category_id` | integer | ID of category |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/supplier_categories/{category_id}`

Remove the link between a category and the third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `category_id` | integer | ID of category |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/notifications/{notification_id}`

Delete a company notification attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `notification_id` | integer | ID of CompanyNotification |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/bankaccounts/{bankaccount_id}`

Delete a bank account attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `bankaccount_id` | integer | ID of CompanyBankAccount |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/accounts`

Delete all accounts attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /thirdparties/{id}/accounts/{site}`

Delete a specific site account attached to a third party 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the third party |
| `site` | string | Site key |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `fieldsforcombobox` |  |
| `SupplierCategories` |  |
| `prefixCustomerIsRequired` |  |
| `nom` |  |
| `name` |  |
| `name_alias` |  |
| `particulier` |  |
| `status` |  |
| `region_code` |  |
| `region` |  |
| `country_id` |  |
| `departement_code` |  |
| `departement` |  |
| `pays` |  |
| `phone` |  |
| `phone_mobile` |  |
| `fax` |  |
| `email` |  |
| `no_email` |  |
| `skype` |  |
| `twitter` |  |
| `facebook` |  |
| `linkedin` |  |
| `url` |  |
| `barcode` |  |
| `idprof1` |  |
| `siren` |  |
| `idprof2` |  |
| `siret` |  |
| `idprof3` |  |
| `ape` |  |
| `idprof4` |  |
| `idprof5` |  |
| `idprof6` |  |
| `idprof7` |  |
| `idprof8` |  |
| `idprof9` |  |
| `idprof10` |  |
| `socialobject` |  |
| `prefix_comm` |  |
| `tva_assuj` |  |
| `tva_intra` |  |
| `vat_reverse_charge` |  |
| `localtax1_assuj` |  |
| `localtax1_value` |  |
| `localtax2_assuj` |  |
| `localtax2_value` |  |
| `managers` |  |
| `capital` |  |
| `typent_id` |  |
| `typent_code` |  |
| `effectif` |  |
| `effectif_id` |  |
| `forme_juridique_code` |  |
| `forme_juridique` |  |
| `birth` |  |
| `remise_percent` |  |
| `remise_supplier_percent` |  |
| `mode_reglement_id` |  |
| `cond_reglement_id` |  |
| `deposit_percent` |  |
| `mode_reglement_supplier_id` |  |
| `cond_reglement_supplier_id` |  |
| `transport_mode_supplier_id` |  |
| `fk_prospectlevel` |  |
| `name_bis` |  |
| `user_modification` |  |
| `user_creation` |  |
| `client` |  |
| `prospect` |  |
| `fournisseur` |  |
| `code_client` |  |
| `code_fournisseur` |  |
| `code_compta_client` |  |
| `accountancy_code_customer_general` |  |
| `accountancy_code_customer` |  |
| `code_compta_fournisseur` |  |
| `accountancy_code_supplier_general` |  |
| `accountancy_code_supplier` |  |
| `code_compta_product` |  |
| `note_private` |  |
| `note_public` |  |
| `stcomm_id` |  |
| `stcomm_picto` |  |
| `status_prospect_label` |  |
| `price_level` |  |
| `outstanding_limit` |  |
| `order_min_amount` |  |
| `supplier_order_min_amount` |  |
| `commercial_id` |  |
| `parent` |  |
| `default_lang` |  |
| `ref` |  |
| `ref_ext` |  |
| `ip` |  |
| `webservices_url` |  |
| `webservices_key` |  |
| `logo` |  |
| `logo_small` |  |
| `logo_mini` |  |
| `logo_squarred` |  |
| `logo_squarred_small` |  |
| `logo_squarred_mini` |  |
| `accountancy_code_sell` |  |
| `accountancy_code_buy` |  |
| `currency_code` |  |
| `fk_multicurrency` |  |
| `multicurrency_code` |  |
| `fk_warehouse` |  |
| `termsofsale` |  |
| `partnerships` |  |
| `bank_account` |  |
| `code_compta` |  |

---

## users

**Utilisateurs / Employés**

### 🔍 GET (Lecture)

#### `GET /users`

List users 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `user_ids` | string | User ids filter field. Example: '1' or '1,2,3' |
| `category` | integer | Use this param to filter list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /users?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "statut": "...",
    "status": "...",
    "openid": "...",
    "ldap_sid": "...",
    "search_sid": "...",
    "employee": "...",
    "civility_code": "...",
    "fullname": "...",
    "gender": "...",
    "birth": "...",
    "email": "...",
    "email_oauth2": "...",
    "personal_email": "...",
    "socialnetworks": "...",
    "job": "...",
    "signature": "...",
    "office_phone": "...",
    "office_fax": "...",
    "user_mobile": "...",
    "personal_mobile": "...",
    "admin": "...",
    "login": "...",
    "api_key": "...",
    "pass": "...",
    "pass_crypted": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "pass_temp": "...",
    "datec": "...",
    "datem": "...",
    "socid": "...",
    "contact_id": "...",
    "fk_member": "...",
    "fk_user": "...",
    "fk_user_expense_validator": "...",
    "fk_user_holiday_validator": "...",
    "clicktodial_url": "...",
    "clicktodial_login": "...",
    "clicktodial_password": "...",
    "clicktodial_poste": "...",
    "clicktodial_loaded": "...",
    "datelastpassvalidation": "...",
    "datelastlogin": "...",
    "datepreviouslogin": "...",
    "flagdelsessionsbefore": "...",
    "iplastlogin": "...",
    "ippreviouslogin": "...",
    "datestartvalidity": "...",
    "dateendvalidity": "...",
    "photo": "...",
    "lang": "...",
    "rights": "...",
    "all_permissions_are_loaded": "...",
    "nb_rights": "...",
    "user_group_list": "...",
    "conf": "...",
    "default_values": "...",
    "lastsearch_values_tmp": "...",
    "lastsearch_values": "...",
    "users": "...",
    "parentof": "...",
    "accountancy_code_user_general": "...",
    "accountancy_code": "...",
    "thm": "...",
    "tjm": "...",
    "salary": "...",
    "salaryextra": "...",
    "weeklyhours": "...",
    "color": "...",
    "dateemployment": "...",
    "dateemploymentend": "...",
    "default_c_exp_tax_cat": "...",
    "ref_employee": "...",
    "national_registration_number": "...",
    "default_range": "...",
    "fk_warehouse": "...",
    "fk_establishment": "...",
    "label_establishment": "...",
    "usergroup_entity": "..."
  }
]
```

#### `GET /users/{id}`

Get a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of user |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includepermissions` | integer | Set this to 1 to have the array of permissions loaded (not done by default for performance purpose) |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/login/{login}`

Get a user by login 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `login` | string | Login of user |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includepermissions` | integer | Set this to 1 to have the array of permissions loaded (not done by default for performance purpose) |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/email/{email}`

Get a user by email 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `email` | string | Email of user |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includepermissions` | integer | Set this to 1 to have the array of permissions loaded (not done by default for performance purpose) |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/info`

Get more properties of the current user (so user of API token). 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `includepermissions` | integer | Set this to 1 to have the array of permissions loaded (not done by default for performance purpose) |

**Exemple d'URL avec filtres :**
`GET /users?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "statut": "...",
    "status": "...",
    "openid": "...",
    "ldap_sid": "...",
    "search_sid": "...",
    "employee": "...",
    "civility_code": "...",
    "fullname": "...",
    "gender": "...",
    "birth": "...",
    "email": "...",
    "email_oauth2": "...",
    "personal_email": "...",
    "socialnetworks": "...",
    "job": "...",
    "signature": "...",
    "office_phone": "...",
    "office_fax": "...",
    "user_mobile": "...",
    "personal_mobile": "...",
    "admin": "...",
    "login": "...",
    "api_key": "...",
    "pass": "...",
    "pass_crypted": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "pass_temp": "...",
    "datec": "...",
    "datem": "...",
    "socid": "...",
    "contact_id": "...",
    "fk_member": "...",
    "fk_user": "...",
    "fk_user_expense_validator": "...",
    "fk_user_holiday_validator": "...",
    "clicktodial_url": "...",
    "clicktodial_login": "...",
    "clicktodial_password": "...",
    "clicktodial_poste": "...",
    "clicktodial_loaded": "...",
    "datelastpassvalidation": "...",
    "datelastlogin": "...",
    "datepreviouslogin": "...",
    "flagdelsessionsbefore": "...",
    "iplastlogin": "...",
    "ippreviouslogin": "...",
    "datestartvalidity": "...",
    "dateendvalidity": "...",
    "photo": "...",
    "lang": "...",
    "rights": "...",
    "all_permissions_are_loaded": "...",
    "nb_rights": "...",
    "user_group_list": "...",
    "conf": "...",
    "default_values": "...",
    "lastsearch_values_tmp": "...",
    "lastsearch_values": "...",
    "users": "...",
    "parentof": "...",
    "accountancy_code_user_general": "...",
    "accountancy_code": "...",
    "thm": "...",
    "tjm": "...",
    "salary": "...",
    "salaryextra": "...",
    "weeklyhours": "...",
    "color": "...",
    "dateemployment": "...",
    "dateemploymentend": "...",
    "default_c_exp_tax_cat": "...",
    "ref_employee": "...",
    "national_registration_number": "...",
    "default_range": "...",
    "fk_warehouse": "...",
    "fk_establishment": "...",
    "label_establishment": "...",
    "usergroup_entity": "..."
  }
]
```

#### `GET /users/{id}/setPassword`

Update a user password 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | User ID |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `send_password` | boolean | Only if set to true, the new password will send to the user |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/{id}/groups`

List the groups of a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of user |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/{id}/setGroup/{group}`

Add a user to a group 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | User ID |
| `group` | integer | Group ID |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `entity` | integer | Entity ID (valid only for superadmin in multicompany transverse mode) |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/groups`

List groups of the current user (so user of API token) 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `group_ids` | string | Groups ids filter field. Example: '1' or '1,2,3' |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.ref:like:'SO-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |

**Exemple d'URL avec filtres :**
`GET /users?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "statut": "...",
    "status": "...",
    "openid": "...",
    "ldap_sid": "...",
    "search_sid": "...",
    "employee": "...",
    "civility_code": "...",
    "fullname": "...",
    "gender": "...",
    "birth": "...",
    "email": "...",
    "email_oauth2": "...",
    "personal_email": "...",
    "socialnetworks": "...",
    "job": "...",
    "signature": "...",
    "office_phone": "...",
    "office_fax": "...",
    "user_mobile": "...",
    "personal_mobile": "...",
    "admin": "...",
    "login": "...",
    "api_key": "...",
    "pass": "...",
    "pass_crypted": "...",
    "pass_indatabase": "...",
    "pass_indatabase_crypted": "...",
    "pass_temp": "...",
    "datec": "...",
    "datem": "...",
    "socid": "...",
    "contact_id": "...",
    "fk_member": "...",
    "fk_user": "...",
    "fk_user_expense_validator": "...",
    "fk_user_holiday_validator": "...",
    "clicktodial_url": "...",
    "clicktodial_login": "...",
    "clicktodial_password": "...",
    "clicktodial_poste": "...",
    "clicktodial_loaded": "...",
    "datelastpassvalidation": "...",
    "datelastlogin": "...",
    "datepreviouslogin": "...",
    "flagdelsessionsbefore": "...",
    "iplastlogin": "...",
    "ippreviouslogin": "...",
    "datestartvalidity": "...",
    "dateendvalidity": "...",
    "photo": "...",
    "lang": "...",
    "rights": "...",
    "all_permissions_are_loaded": "...",
    "nb_rights": "...",
    "user_group_list": "...",
    "conf": "...",
    "default_values": "...",
    "lastsearch_values_tmp": "...",
    "lastsearch_values": "...",
    "users": "...",
    "parentof": "...",
    "accountancy_code_user_general": "...",
    "accountancy_code": "...",
    "thm": "...",
    "tjm": "...",
    "salary": "...",
    "salaryextra": "...",
    "weeklyhours": "...",
    "color": "...",
    "dateemployment": "...",
    "dateemploymentend": "...",
    "default_c_exp_tax_cat": "...",
    "ref_employee": "...",
    "national_registration_number": "...",
    "default_range": "...",
    "fk_warehouse": "...",
    "fk_establishment": "...",
    "label_establishment": "...",
    "usergroup_entity": "..."
  }
]
```

#### `GET /users/groups/{group}`

Get properties of a user group 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `group` | integer | ID of group |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `load_members` | integer | Load members list or not |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

#### `GET /users/{id}/notifications`

Get notifications for a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the user |

**Exemple de réponse (JSON) :**

```json
{
  "statut": "...",
  "status": "...",
  "openid": "...",
  "ldap_sid": "...",
  "search_sid": "...",
  "employee": "...",
  "civility_code": "...",
  "fullname": "...",
  "gender": "...",
  "birth": "...",
  "email": "...",
  "email_oauth2": "...",
  "personal_email": "...",
  "socialnetworks": "...",
  "job": "...",
  "signature": "...",
  "office_phone": "...",
  "office_fax": "...",
  "user_mobile": "...",
  "personal_mobile": "...",
  "admin": "...",
  "login": "...",
  "api_key": "...",
  "pass": "...",
  "pass_crypted": "...",
  "pass_indatabase": "...",
  "pass_indatabase_crypted": "...",
  "pass_temp": "...",
  "datec": "...",
  "datem": "...",
  "socid": "...",
  "contact_id": "...",
  "fk_member": "...",
  "fk_user": "...",
  "fk_user_expense_validator": "...",
  "fk_user_holiday_validator": "...",
  "clicktodial_url": "...",
  "clicktodial_login": "...",
  "clicktodial_password": "...",
  "clicktodial_poste": "...",
  "clicktodial_loaded": "...",
  "datelastpassvalidation": "...",
  "datelastlogin": "...",
  "datepreviouslogin": "...",
  "flagdelsessionsbefore": "...",
  "iplastlogin": "...",
  "ippreviouslogin": "...",
  "datestartvalidity": "...",
  "dateendvalidity": "...",
  "photo": "...",
  "lang": "...",
  "rights": "...",
  "all_permissions_are_loaded": "...",
  "nb_rights": "...",
  "user_group_list": "...",
  "conf": "...",
  "default_values": "...",
  "lastsearch_values_tmp": "...",
  "lastsearch_values": "...",
  "users": "...",
  "parentof": "...",
  "accountancy_code_user_general": "...",
  "accountancy_code": "...",
  "thm": "...",
  "tjm": "...",
  "salary": "...",
  "salaryextra": "...",
  "weeklyhours": "...",
  "color": "...",
  "dateemployment": "...",
  "dateemploymentend": "...",
  "default_c_exp_tax_cat": "...",
  "ref_employee": "...",
  "national_registration_number": "...",
  "default_range": "...",
  "fk_warehouse": "...",
  "fk_establishment": "...",
  "label_establishment": "...",
  "usergroup_entity": "..."
}
```

### ✏️ POST (Création)

#### `POST /users`

Create a user 🔐

**Body nécessaire (JSON) :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",  // ⚠️ OBLIGATOIRE
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`, `lastname`

**Réponse :** `int` — ID de l'objet créé.

#### `POST /users/groups`

Create user group 🔐

**Body nécessaire (JSON) :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",  // ⚠️ OBLIGATOIRE
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`, `lastname`

**Réponse :** `int` — ID de l'objet créé.

#### `POST /users/{id}/remove-group/{group}`

Remove user from group (only admin) 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | User ID |
| `group` | integer | Group ID |

**Body nécessaire (JSON) :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",  // ⚠️ OBLIGATOIRE
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`, `lastname`

**Réponse :** `int` — ID de l'objet créé.

#### `POST /users/{id}/notifications`

Create a notification for a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the user |

**Body nécessaire (JSON) :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",  // ⚠️ OBLIGATOIRE
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`, `lastname`

**Réponse :** `int` — ID de l'objet créé.

#### `POST /users/{id}/notificationsbycode/{code}`

Create a notification for a user using action trigger code 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the user |
| `code` | string | Action Trigger code |

**Body nécessaire (JSON) :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",  // ⚠️ OBLIGATOIRE
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

> ⚠️ **Champs obligatoires :** `login`, `password`, `lastname`

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /users/{id}`

Update a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Id of account to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /users/groups/{group}`

Update user group 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `group` | integer | Id of usergroup to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

**Réponse :** Objet modifié.

#### `PUT /users/{id}/notifications/{notification_id}`

Update a notification for a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the User |
| `notification_id` | integer | ID of UserNotification |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "statut": "",
  "status": "",
  "openid": "",
  "ldap_sid": "",
  "search_sid": "",
  "employee": "",
  "civility_code": "",
  "fullname": "",
  "gender": "",
  "birth": "",
  "email": "",
  "email_oauth2": "",
  "personal_email": "",
  "socialnetworks": "",
  "job": "",
  "signature": "",
  "office_phone": "",
  "office_fax": "",
  "user_mobile": "",
  "personal_mobile": "",
  "admin": "",
  "login": "",
  "api_key": "",
  "pass": "",
  "pass_crypted": "",
  "pass_indatabase": "",
  "pass_indatabase_crypted": "",
  "pass_temp": "",
  "datec": "",
  "datem": "",
  "socid": "",
  "contact_id": "",
  "fk_member": "",
  "fk_user": "",
  "fk_user_expense_validator": "",
  "fk_user_holiday_validator": "",
  "clicktodial_url": "",
  "clicktodial_login": "",
  "clicktodial_password": "",
  "clicktodial_poste": "",
  "clicktodial_loaded": "",
  "datelastpassvalidation": "",
  "datelastlogin": "",
  "datepreviouslogin": "",
  "flagdelsessionsbefore": "",
  "iplastlogin": "",
  "ippreviouslogin": "",
  "datestartvalidity": "",
  "dateendvalidity": "",
  "photo": "",
  "lang": "",
  "rights": "",
  "all_permissions_are_loaded": "",
  "nb_rights": "",
  "user_group_list": "",
  "conf": "",
  "default_values": "",
  "lastsearch_values_tmp": "",
  "lastsearch_values": "",
  "users": "",
  "parentof": "",
  "accountancy_code_user_general": "",
  "accountancy_code": "",
  "thm": "",
  "tjm": "",
  "salary": "",
  "salaryextra": "",
  "weeklyhours": "",
  "color": "",
  "dateemployment": "",
  "dateemploymentend": "",
  "default_c_exp_tax_cat": "",
  "ref_employee": "",
  "national_registration_number": "",
  "default_range": "",
  "fk_warehouse": "",
  "fk_establishment": "",
  "label_establishment": "",
  "usergroup_entity": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /users/{id}`

Delete a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Account ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /users/groups/{group}`

Delete a usergroup 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `group` | integer | usergroup ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

#### `DELETE /users/{id}/notifications/{notification_id}`

Delete a notification attached to a user 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of the user |
| `notification_id` | integer | ID of UserNotification |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `statut` |  |
| `status` |  |
| `openid` |  |
| `ldap_sid` |  |
| `search_sid` |  |
| `employee` |  |
| `civility_code` |  |
| `fullname` |  |
| `gender` |  |
| `birth` |  |
| `email` |  |
| `email_oauth2` |  |
| `personal_email` |  |
| `socialnetworks` |  |
| `job` |  |
| `signature` |  |
| `office_phone` |  |
| `office_fax` |  |
| `user_mobile` |  |
| `personal_mobile` |  |
| `admin` |  |
| `login` | ⚠️ OUI |
| `api_key` |  |
| `pass` |  |
| `pass_crypted` |  |
| `pass_indatabase` |  |
| `pass_indatabase_crypted` |  |
| `pass_temp` |  |
| `datec` |  |
| `datem` |  |
| `socid` |  |
| `contact_id` |  |
| `fk_member` |  |
| `fk_user` |  |
| `fk_user_expense_validator` |  |
| `fk_user_holiday_validator` |  |
| `clicktodial_url` |  |
| `clicktodial_login` |  |
| `clicktodial_password` |  |
| `clicktodial_poste` |  |
| `clicktodial_loaded` |  |
| `datelastpassvalidation` |  |
| `datelastlogin` |  |
| `datepreviouslogin` |  |
| `flagdelsessionsbefore` |  |
| `iplastlogin` |  |
| `ippreviouslogin` |  |
| `datestartvalidity` |  |
| `dateendvalidity` |  |
| `photo` |  |
| `lang` |  |
| `rights` |  |
| `all_permissions_are_loaded` |  |
| `nb_rights` |  |
| `user_group_list` |  |
| `conf` |  |
| `default_values` |  |
| `lastsearch_values_tmp` |  |
| `lastsearch_values` |  |
| `users` |  |
| `parentof` |  |
| `accountancy_code_user_general` |  |
| `accountancy_code` |  |
| `thm` |  |
| `tjm` |  |
| `salary` |  |
| `salaryextra` |  |
| `weeklyhours` |  |
| `color` |  |
| `dateemployment` |  |
| `dateemploymentend` |  |
| `default_c_exp_tax_cat` |  |
| `ref_employee` |  |
| `national_registration_number` |  |
| `default_range` |  |
| `fk_warehouse` |  |
| `fk_establishment` |  |
| `label_establishment` |  |
| `usergroup_entity` |  |

---

## warehouses

**Entrepôts**

### 🔍 GET (Lecture)

#### `GET /warehouses/{id}`

Get properties of a warehouse object 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of warehouse |

**Exemple de réponse (JSON) :**

```json
{
  "libelle": "...",
  "label": "...",
  "barcode": "...",
  "description": "...",
  "fk_departement": "...",
  "statut": "...",
  "lieu": "...",
  "address": "...",
  "zip": "...",
  "town": "...",
  "phone": "...",
  "fax": "...",
  "fk_parent": "...",
  "fk_project": "...",
  "warehouse_usage": "..."
}
```

#### `GET /warehouses`

List warehouses 🔐

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `category` | integer | Use this param to filter list by category |
| `sqlfilters` | string | Other criteria to filter answers separated by a comma. Syntax example "(t.label:like:'WH-%') and (t.date_creation:<:'20160101')" |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0* |

**Exemple d'URL avec filtres :**
`GET /warehouses?sortfield=t.rowid&sortorder=ASC&limit=100`

**Exemple de réponse (JSON) :**

```json
[
  {
    "libelle": "...",
    "label": "...",
    "barcode": "...",
    "description": "...",
    "fk_departement": "...",
    "statut": "...",
    "lieu": "...",
    "address": "...",
    "zip": "...",
    "town": "...",
    "phone": "...",
    "fax": "...",
    "fk_parent": "...",
    "fk_project": "...",
    "warehouse_usage": "..."
  }
]
```

#### `GET /warehouses/{id}/products`

List products in a warehouse 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | warehouse ID |

**Paramètres Query (optionnels) :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `sortfield` | string | Sort field |
| `sortorder` | string | Sort order |
| `limit` | integer | Limit for list |
| `page` | integer | Page number |
| `includestockdata` | integer | 1=Load also information about stock (slower), 0=No stock data (faster) (default) |
| `includesubproducts` | boolean | Load information about subproducts |
| `includeparentid` | boolean | Load also ID of parent product (if product is a variant of a parent product) |
| `includetrans` | boolean | Load also the translations of product label and description |
| `properties` | string | Restrict the data returned to these properties. Ignored if empty. Comma separated list of properties names |
| `pagination_data` | boolean | If this parameter is set to true the response will include pagination data. Default value is false. Page starts from 0 |

**Exemple de réponse (JSON) :**

```json
{
  "libelle": "...",
  "label": "...",
  "barcode": "...",
  "description": "...",
  "fk_departement": "...",
  "statut": "...",
  "lieu": "...",
  "address": "...",
  "zip": "...",
  "town": "...",
  "phone": "...",
  "fax": "...",
  "fk_parent": "...",
  "fk_project": "...",
  "warehouse_usage": "..."
}
```

### ✏️ POST (Création)

#### `POST /warehouses`

Create a warehouse 🔐

**Body nécessaire (JSON) :**

```json
{
  "libelle": "",
  "label": "",
  "barcode": "",
  "description": "",
  "fk_departement": "",
  "statut": "",
  "lieu": "",
  "address": "",
  "zip": "",
  "town": "",
  "phone": "",
  "fax": "",
  "fk_parent": "",
  "fk_project": "",
  "warehouse_usage": ""
}
```

**Réponse :** `int` — ID de l'objet créé.

### 🔄 PUT (Modification)

#### `PUT /warehouses/{id}`

Update a warehouse 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | ID of warehouse to update |

**Body (JSON) — envoyer uniquement les champs à modifier :**

```json
{
  "libelle": "",
  "label": "",
  "barcode": "",
  "description": "",
  "fk_departement": "",
  "statut": "",
  "lieu": "",
  "address": "",
  "zip": "",
  "town": "",
  "phone": "",
  "fax": "",
  "fk_parent": "",
  "fk_project": "",
  "warehouse_usage": ""
}
```

**Réponse :** Objet modifié.

### 🗑️ DELETE (Suppression)

#### `DELETE /warehouses/{id}`

Delete a warehouse 🔐

**Paramètres URL :**

| Paramètre | Type | Description |
|-----------|------|-------------|
| `id` | integer | Warehouse ID |

**Body :** Aucun body nécessaire.

**Réponse :**

```json
{
  "success": {
    "code": 200,
    "message": "Object deleted"
  }
}
```

### 📋 Référence complète des champs de l'objet

> Ces champs sont renvoyés par les GET et acceptés par les POST/PUT.

| Champ | Obligatoire |
|-------|:-----------:|
| `libelle` |  |
| `label` |  |
| `barcode` |  |
| `description` |  |
| `fk_departement` |  |
| `statut` |  |
| `lieu` |  |
| `address` |  |
| `zip` |  |
| `town` |  |
| `phone` |  |
| `fax` |  |
| `fk_parent` |  |
| `fk_project` |  |
| `warehouse_usage` |  |

---


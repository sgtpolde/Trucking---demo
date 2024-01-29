# Backend stucture

- Athentication
    - Roles
        - Power User (Admin)
        - Company
        - Employee
    - Permissions
        - 
- Optimizator for parcels
    - Dimensions of truck / carrier
    - Dimensions of parcel (individual)
    - Barrier token (Header)


### Json request for optimizer:

```json
    {
        //"uuid" : "1223004Jsjeb920",
        "ignoreWeight": "false",
        "carrier": {
            "mainCarrier": {
                "x": "",
                "y": "",
                "z": "",
                "maxWeight": "50t",
            },
            "subCarriers": {
                "subCarrierName1": {
                    "x": "",
                    "y": "",
                    "z": "",
                    "maxWeight": "50t",
                },
                "subCarrierName2": {
                "x": "",
                "y": "",
                "z": "",
                "maxWeight": "50t",
                },
               "subCarrierName3": {
                "x": "",
                "y": "",
                "z": "",
                "maxWeight": "50t",
                },       
            }
        },
        "parcels": {
            "parcel1-uuid" : {
            //"uuid": "123456nnga",
            "x":"",
            "y":"",
            "z": "",
            "weight": "20kg",
            "hardCargo": "true"
            },
            "parcel2-uuid" : {
            //"uuid": "123456nnga",
            "x":"",
            "y":"",
            "z": "",
            "weight": "20kg",
            "hardCargo": "true"
            },
            "parcel3-uuid": {
            //"uuid": "123456nnga",
            "x":"",
            "y":"",
            "z": "",
            "weight": "20kg",
            "hardCargo": "true"
            },
        }
    }
```

### Json response for optimizer
```json
{

    "ignoreWeight": "false",

}
```
- History
    - Session based history
    - Logging of parcel / truck configuration
    



# API

- Open only to the frontend (CORS)

### Endpoints
All endpoints:
- Main URL
    ```
    https://localhost:8000/tcs/api
    ```

- Authentication (```/auth```)
    - 

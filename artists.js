
  "version": "2.0", /*a는 0월0일 0요일 000에서 만나볼 수 있어요*/
  "data": {
    "artist_name":"HI",
    "data":"Ryan",
    "stage":"Senior Managing Director"}

  "action": {
    "name": "<스킬 이름>",
    "clientExtra": null,
    "params": {"artist_name":
      "{\"\":}"

    },
    "id": "<스킬 id>",
    "detailParams": {}
  }

  /*------------------------------------------------------------*/

  {
    ...,
    "action": {
      "name": "예제 스킬",
      "id": "...",
      "params": {
        "sys_date": "{\"dateTag\": \"Friday\", \"dateHeadword\": null, \"month\": null, \"year\": null, \"date\": \"2018-11-23\", \"day\": null}",
        "sys_location": "강남",
        "sys_number": "{\"amount\": 1, \"unit\": null}"
      },
      "detailParams": {    /*detailParams는 봇 시스템에서 분석한 값 뿐만 아니라, 원래 발화에 담겨 있었던 origin을 포함합니다.*/
        "sys_date": {
          "origin": "금요일",
          "value": "{\"dateTag\": \"Friday\", \"dateHeadword\": null, \"month\": null, \"year\": null, \"date\": \"2018-11-23\", \"day\": null}",
          "groupName": ""
        },
        "sys_location": {
          "origin": "강남",
          "value": "강남",
          "groupName": ""
        },
        "sys_number": {
          "origin": "1",
          "value": "{\"amount\": 1, \"unit\": null}",
          "groupName": ""
        }
      }
    }
  }

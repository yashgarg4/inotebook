import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "6167fa95641587e754d24d1c",
      "user": "6166c0df878f6defa45e9f64",
      "title": "new note",
      "description": "this is a new note",
      "tag": "business",
      "date": "2021-10-14T09:38:30.187Z",
      "__v": 0
    },
    {
      "_id": "616d72c859bc829232c169d3",
      "user": "6166c0df878f6defa45e9f64",
      "title": "context note",
      "description": "contex note is cool",
      "tag": "businesssss",
      "date": "2021-10-18T13:12:40.897Z",
      "__v": 0
    },
    {
        "_id": "6167fa95641587e754d24d1c",
        "user": "6166c0df878f6defa45e9f64",
        "title": "new note",
        "description": "this is a new note",
        "tag": "business",
        "date": "2021-10-14T09:38:30.187Z",
        "__v": 0
      },
      {
        "_id": "616d72c859bc829232c169d3",
        "user": "6166c0df878f6defa45e9f64",
        "title": "context note",
        "description": "contex note is cool",
        "tag": "businesssss",
        "date": "2021-10-18T13:12:40.897Z",
        "__v": 0
      },{
        "_id": "6167fa95641587e754d24d1c",
        "user": "6166c0df878f6defa45e9f64",
        "title": "new note",
        "description": "this is a new note",
        "tag": "business",
        "date": "2021-10-14T09:38:30.187Z",
        "__v": 0
      },
      {
        "_id": "616d72c859bc829232c169d3",
        "user": "6166c0df878f6defa45e9f64",
        "title": "context note",
        "description": "contex note is cool",
        "tag": "businesssss",
        "date": "2021-10-18T13:12:40.897Z",
        "__v": 0
      },
      {
        "_id": "6167fa95641587e754d24d1c",
        "user": "6166c0df878f6defa45e9f64",
        "title": "new note",
        "description": "this is a new note",
        "tag": "business",
        "date": "2021-10-14T09:38:30.187Z",
        "__v": 0
      },
      {
        "_id": "616d72c859bc829232c169d3",
        "user": "6166c0df878f6defa45e9f64",
        "title": "context note",
        "description": "contex note is cool",
        "tag": "businesssss",
        "date": "2021-10-18T13:12:40.897Z",
        "__v": 0
      }
  ]
  const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
const express = require('express');
const { NoteModel } = require('../model/noteModel');
const noteRouter = express.Router();



// Adding Notes to the database
noteRouter.post("/add", async (req, res) => {
    try {
        const note = new NoteModel(req.body);
        await note.save();
        res.status(200).send({ "msg": "A New Notes will be added" })

    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
});

// Fetch all notes from the database
noteRouter.get("/", async (req, res) => {

    try {

        const note = await NoteModel.find();
        res.status(200).send(note)


    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
});

// Delete notes from the database
noteRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await NoteModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "msg": "A  Notes data will be Deleted" });

    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
});


module.exports = {
    noteRouter
}
import { Request, Response, NextFunction } from "express";
import EventModel from "../models/event.model";

const createEvent = async (req: Request, res: Response) => {
  const { name, description, date } = req.body;
  const userId = req.user?._id;

  const event = await EventModel.create({
    name,
    description,
    date,
    status: "pending",
    creator: userId,
  });

  if (event) {
    res.status(200).json(event);
  } else {
    res.status(500).json({ error: "Failed to create event" });
  }
};

const getAllUserEvents = async (req: Request, res: Response) => {
  const userId = req.user?._id;
  const events = await EventModel.find({ creator: userId });

  if (events) {
    res.status(200).json(events);
  } else {
    res.status(500).json({ error: "Failed to retrieve user events" });
  }
};

const updateEvent = async (req: Request, res: Response) => {
  try {
    const eventDataToUpdate = req.body;
    const event = res.locals.event;

    Object.assign(event, eventDataToUpdate);
    await event.save();

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user event" });
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  const eventId = res.locals.event._id;
  const deletedEvent = await EventModel.findByIdAndDelete(eventId);

  if (deletedEvent) {
    res.status(200).json({ message: "Event deleted successfully" });
  } else {
    res.status(500).json({ error: "Failed to delete user event" });
  }
};

export { createEvent, getAllUserEvents, updateEvent, deleteEvent };

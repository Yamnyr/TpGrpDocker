// controllers/messageController.js
const { Message } = require('../models'); // Importer le modèle Message

// Récupérer tous les messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Erreur du serveur', error: err });
  }
};

// Récupérer un message par ID
const getMessage = async (req, res) => {
  const messageId = req.params.id;
  try {
    const message = await Message.findByPk(messageId); // Trouver par clé primaire
    if (!message) {
      return res.status(404).json({ message: 'Message non trouvé' });
    }
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: 'Erreur du serveur', error: err });
  }
};

// Créer un nouveau message
const createMessage = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: 'Le texte du message est requis' });
  }

  try {
    const newMessage = await Message.create({ text });
    res.status(201).json({ message: 'Message créé avec succès', id: newMessage.id });
  } catch (err) {
    res.status(500).json({ message: 'Erreur du serveur', error: err });
  }
};

module.exports = {
  getMessages,
  getMessage,
  createMessage
};

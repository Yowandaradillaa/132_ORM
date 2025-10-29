const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port 3001`);
});

db.sequelize.sync()
  .then((result) => {
    app.listen(3001, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post('/Komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.send(komik);
    } catch (error) {}
        res.send({ message: error.message });
    });

    app.get('/Komik', async (req, res) => {
    try {
        const komik = await db.Komik.findAll();
        res.send(komik);
    } catch (error) {
        res.send({ message: error.message });
    }
});

app.put('/Komik/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.update(data);
        res.send({message: 'Komik updated successfully'});
    } catch (error) {
        res.send({ message: error.message });
    }
});

app.delete('/Komik/:id', async (req, res) => {
    const id = req.params.id;
    try {
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.destroy();
        res.send({message: 'Komik deleted successfully'});
    } catch (error) {
        res.send({ message: error.message });
    }
});

app.delete('/Komik/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.destroy();
        res.send({message: 'Komik deleted successfully'});
    } catch (error) {
        res.status(500).send(err);
    }
});

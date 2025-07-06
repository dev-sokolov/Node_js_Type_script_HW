import express from 'express';
import cors from 'cors';
import * as Yup from 'yup';

import User from './bd/User.js';

const userDataAddSchema = Yup.object({
    name: Yup.string().required(),
    age: Yup.number().min(0).required(),
    telNumber: Yup.number().min(0).required()
});

const userDataUpdateSchema = Yup.object({
    name: Yup.string(),
    age: Yup.number().min(0),
    telNumber: Yup.number().min(0)
})

const startServer = () => {

    const app = express();
    app.use(cors());
    app.use(express.json())

    app.get("/api/users", async (req, res) => {
        const result = await User.findAll();
        res.json(result)
    })

    app.get("/api/users/:id", async (req, res) => {
        const { id } = req.params;
        const result = await User.findByPk(id);

        if (!result) {
            return res.status(404).json({
                message: `user with id=${id} not found`
            })
        }
        res.json(result)
    })

    app.post("/api/users", async (req, res) => {
        try {
            await userDataAddSchema.validate(req.body);
            const result = await User.create(req.body);
            res.status(201).json(result)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    });

    app.put("/api/users/:id", async (req, res) => {
        try {
            await userDataUpdateSchema.validate(req.body);
            const { id } = req.params;
            const result = await User.findByPk(id);

            if (!result) {
                return res.status(404).json({
                    message: `user with id=${id} not found`
                })
            }

            await result.update(req.body);
            res.json(result)

        } catch (error) {
            res.status(404).json({
                message: error.message
            });
        }
    });

    app.delete("/api/users/:id", async (req, res) => {
        const { id } = req.params;
        const result = await User.findByPk(id);

        if (!result) {
            return res.status(404).json({
                message: `user with id=${id} not found`
            })
        }

        await result.destroy();
        res.json(result);
    })

    const port = process.env.PORT || 3500
    app.listen(port, () => console.log(`server running on 3500 порт`));

}

export default startServer;











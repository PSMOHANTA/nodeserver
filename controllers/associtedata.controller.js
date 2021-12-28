const populateIndex = async (model, requirement, req, res) => {
    let limit=parseInt(req.query.limit);
    let page=parseInt(req.query.page);
    let order=req.query.order;
    try {
        const data = await model.findAll({
            order:[['id',order?order:'desc']],
            limit:limit?limit:20,
            offset:page?(page-1)*limit:0,
            attributes: { exclude: ['passwordHash','createdAt','updatedAt'] },
            include:requirement,

        });
        if (!data[0]) {
            res.status(404).send({ message: 'Data Not Found' });
        } else {
            res.status(200).send(data)
        }
    } catch (error) {
    }
}
const populateshow = async (model, requirement, req, res) => {
    try {
        const data = await model.findOne({
            where: {
            id: req.params.id
          },
          attributes: { exclude: ['passwordHash','createdAt','updatedAt'] },
          include:requirement
        });
        if (!data) {
            res.status(404).send({ message: 'Data Not Found' });
        } else {
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports ={populateIndex, populateshow};
const index = async (model, req, res) => {
    let limit=parseInt(req.query.limit);
    let page=parseInt(req.query.page);
    let order=req.query.order;
    try {
        const data = await model.findAll({
            order:[['id',order?order:'desc']],
            limit:limit?limit:20,
            offset:page?(page-1)*limit:0,
            attributes: { exclude: ['passwordHash'] }
        });
        if (!data[0]) {
            res.status(404).send({ message: 'Data Not Found' });
        } else {
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const create = async (model, req, res) => {
    try {
        await model.sync();
        const data = await model.create({ ...req.body });
        res.status(200).send({success:true,messege:'Created/Added Successfully'})
    } catch (error) {
        if(error.errors){
            res.status(500).send({message:error.errors[0].message})
           }else{
            res.status(500).send({message:error.parent.text.split(':')[0]})
           }
    }
}

const show = async (model, req, res) => {
    try {
        const data = await model.findOne({
            where: {
            id: req.params.id
          },
          attributes: { exclude: ['passwordHash'] }
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

const update = async (model, req, res) => {
    try {
        const data = await model.findByPk(req.params.id);
        if (!data) {
            res.status(404).send({ message: 'Data Not Found' });
        } else {
            const updatedData = await data.update({ ...data, ...req.body });
            res.status(200).send({success:true,message:"Updated successfully"})
        }
    } catch (error) {
        if(error.errors){
            res.status(500).send({message:error.errors[0].message})
           }else{
            res.status(500).send({message:error.parent.text.split(':')[0]})
           }
    }
}

const destroy = async (model, req, res) => {
    try {
        const data = await model.findByPk(req.params.id);
        if (!data) {
            res.status(404).send({ message: 'Data Not Found for deletion' });
        } else {
            const updatedData = await data.destroy();
            res.status(200).send({success:true,message:"deleted successfully"})
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { index, create, show, update, destroy }
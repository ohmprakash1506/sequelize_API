export default class App {
    console = async (req, res) =>{
        try {
            res.json({message:`Welcom to sequelize app`});
        } catch (error) {
            res.json({error: error})
        }
    }
}
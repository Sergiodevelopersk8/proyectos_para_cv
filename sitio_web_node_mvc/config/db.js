import { timeStamp } from 'console';
import Sequelize from  'sequelize';


const db = new Sequelize('agenciaviajes','root','root',{

        host:'127.0.0.1',
        port:'3307',
        dialect:'mysql',
        define:{
            timestamps:false
        },
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        },
        OperatorAliases:false
});

export default db;


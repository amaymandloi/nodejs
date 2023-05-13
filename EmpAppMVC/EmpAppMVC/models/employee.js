module.exports=(sequelize, Sequelize) =>{

    const Employee = sequelize.define("employee",
    {
        empid :{

            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        
        firstName :
        {
            type: Sequelize.STRING
        },

        lastName : {

            type : Sequelize.STRING
        },

        designation : {

            type : Sequelize.STRING
        },

        mobileNumber : {

            type : Sequelize.STRING
        },

        email : 
        {
            type : Sequelize.STRING,
            allowNull : false,
            unique : true
        },

        password :
        {
            type : Sequelize.STRING
        }
    });

    return Employee;
};
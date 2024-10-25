"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Roles",
            [
                {
                    name: "ADMIN",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "LIBRARIAN",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: "MEMBER",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Roles", null, {});
    },
};

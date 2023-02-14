import {defineStore} from "pinia";

const tareaDefault = {
    entregado: false,
    nombreAdjunto: 'Adjuntar archivo'
};

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            tareasPendientes: [
                {
                    name: "Tarea 1",
                    ...tareaDefault
                },
                {
                    name: "Tarea 2",
                    ...tareaDefault
                },
                {
                    name: "Tarea 3",
                    ...tareaDefault
                },
            ],
            conversacionChat: [
                {
                    version: "VERSIÓN 1",
                    nombre: "Documentacion Proyecto.docx",
                    tipoArchivo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document (16.35 MB)",
                    hora: "28 dic 2018 / 15:45",
                    tipo: "archivo"
                },
                {
                    text: "Buenas tardes, acabo de subir el primer archivo con el porimer caso práctico, espero revisión.",
                    hora: "28 dic 2018 / 15:45",
                    tipo: "chatAlumno"
                },
                {
                    text: "¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de conbtexto y un apartado final de conclusiones personales.",
                    hora: "29 dic 2018 / 15:45",
                    tipo: "chatProfesor"
                },
                {
                    version: "VERSIÓN 2",
                    nombre: "Documentacion Proyecto.docx",
                    tipoArchivo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document (16.85 MB)",
                    hora: "30 dic 2018 / 15:45",
                    tipo: "archivo"
                },
                {
                    text: "Realizados los cambios según feedback",
                    hora: "30 dic 2018 / 15:46",
                    tipo: "chatAlumno"
                },
                {
                    text: "Perfecto, excelente trabajo.",
                    hora: "30 dic 2018 / 19:45",
                    tipo: "chatProfesor"
                },
            ]
        }
    },
    actions: {
        deleteTarea(key) {
            this.tareasPendientes.splice(key, 1)
        },
        addMessage(message) {
            //Para saber cuantas versiones hay de ese archivo entregados ya
            if (message.tipo === "archivo") {
                const count = this.conversacionChat.filter(m => m.tipo === 'archivo' && m.nombre === message.nombre).length + 1;
                message.version = "VERSIÓN " + count;
            }

            this.conversacionChat.push(message);
        }
    }
    ,
    getters: {
        getTareasPendientes: (state) => state.tareasPendientes,
        getConversacionChat: (state) => state.conversacionChat,
    }
})
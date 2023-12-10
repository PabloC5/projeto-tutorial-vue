<template>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <b-card title="Todo List tutorial">
              <b-table striped hover :items="tasks" :fields="fields">
                <template v-slot:cell(actions)="data">
                  <b-button class="m-1" @click="removeTask(data.item.id)" variant="danger" size="sm">Delete</b-button>
                  <b-button @click="editTask(data.item.id)" variant="primary" size="sm">Editar</b-button>
                </template>
              </b-table>
                
              <b-form @submit.prevent="addTask">
                <b-row>
                    <b-col>
                        <b-form-group label-for="taskInput">
                        <b-input
                            id="taskInput"
                            v-model="newTask"
                            required
                            :placeholder="editTaskOrNo ? 'Editando tarefa' : 'Enter a new task'"
                        ></b-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-button class="ajusta" type="submit" variant="primary">
                            {{ editTaskOrNo ? 'Salvar' : 'Adicionar Tarefa' }}
                        </b-button>
                    </b-col>
                </b-row>
                
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, Nome: "Tarefa 1" },
          { id: 2, Nome: "Tarefa 2" },
        ],
        newTask: "",
        fields: ["Nome", "actions"],
        editTaskOrNo: false,
        idEdit: null
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== "" && !this.editTaskOrNo) {
          this.tasks.push({ id: Date.now(), Nome: this.newTask });
          this.newTask = "";
        } else if (this.editTaskOrNo) {
            this.tasks[this.idEdit].Nome = this.newTask;
            this.editTaskOrNo = false;
            this.newTask = "";
        }
      },
      removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },

      editTask(editId) {
        this.editTaskOrNo = true
        let indiceEdit = this.tasks.findIndex(task => task.id === editId);
        this.newTask = this.tasks[indiceEdit].Nome
        this.idEdit = indiceEdit;
        // this.tasks[indiceEdit].text = this.newTask;
        console.log(this.tasks[indiceEdit].Nome);
      }
    },
  };
  </script>

<style>
    .ajusta {
        margin-left: -430px;
    }
</style>
  
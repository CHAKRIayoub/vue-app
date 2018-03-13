<template>
    <v-container grid-list-xl text-xs-center >
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-btn dark large router to="/users" class="blue darken-1" >
                    users list
                </v-btn>
            </v-flex>
            <v-flex  xs12 sm6>
                <v-btn dark large router to="/add" class="green darken-1" >
                    add users
                </v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
              <v-data-table
                :headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.id }}</td>
                  <td class="text-xs-right">{{ props.item.nom }}</td>
                  <td class="text-xs-right">{{ props.item.prenom }}</td>
                  <td class="text-xs-right">{{ props.item.email }}</td>
                  <td class="text-xs-right">{{ props.item.role }}</td>
                  <td class="text-xs-right">{{ props.item.sexe }}</td>
                </template>
              </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
      data () {
        return {
          headers: [
            {
              text: 'ID',
              align: 'left',
              sortable: false,
              value: 'id'
            },
            { text: 'nom', value: 'nom' },
            { text: 'prenom', value: 'prenom' },
            { text: 'email', value: 'email' },
            { text: 'role', value: 'role' },
            { text: 'sexe', value: 'sexe' }
          ],
          items: [
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            },
            {
              value: false,
              id: 1,
              nom: 'chakri',
              prenom: 'ayoub',
              email: 'ayoub.chakri@gmail.com',
              role: 'admin',
              sexe: 'H'
            }
          ],
          users: [
            {img: '@/assets/1.png', id: '1', title: 'ayoub chakri', desc: 'jjjj jjjj jjjjj jjjj jjjj'},
            {img: '@/assets/2.png', id: '2', title: 'youssef chakri', desc: 'jjjj jjjj jjjjj jjjj jjjj'},
            {img: '@/assets/3.png', id: '3', title: 'othman chakri', desc: 'jjjj jjjj jjjjj jjjj jjjj'}
          ]
        }
      }
    }
</script>
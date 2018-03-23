<template>
    <v-container grid-list-xl text-xs-center >
        <v-layout row wrap>

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
                <td class="text-xs-right">{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.nom }}</td>
                <td class="text-xs-right">{{ props.item.prenom }}</td>
                <td class="text-xs-right">{{ props.item.email }}</td>
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
            { text: 'id', value: 'ID' },
            { text: 'nom', value: 'Nom' },
            { text: 'prenom', value: 'Prenom' },
            { text: 'email', value: 'Email' }
          ],
          items: [
            {id: '1', nom: 'bassir', prenom: 'salah', email: 'Pr.bassir@gmil.com'},
            {id: '2', nom: 'timoumi', prenom: 'mohamed', email: 'Pr.timoumi@gmil.com'},
            {id: '3', nom: 'houman', prenom: 'said..', email: 'Pr.homan@gmil.com'}
          ],
          users: [
            {img: '@/assets/1.png', id: '1', name: 'ayoub chakri', desc: 'jjjj jj jjjjjjjjjjjj jjjj jjjj'},
            {img: '@/assets/2.png', id: '2', name: 'youssef chakri', desc: 'aaaa a aaaa aaaaaa aaaaaaaaaaaa'},
            {img: '@/assets/3.png', id: '3', name: 'othman bouarda', desc: 'ffff f fffffffff hhhhhh llllll'}
          ]
        }
      }
    }
</script>
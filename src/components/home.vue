<template>
    <v-container grid-list-xl text-xs-center >
        <v-layout row wrap>






       
            <!--<v-flex xs12 sm6>
                <v-btn dark large router to="/users" class="blue darken-1" >
                    uuuuu
                </v-btn>
            </v-flex>
            <v-flex  xs12 sm6>
                <v-btn dark large router to="/add" class="green darken-1" >
                    add users
                </v-btn>
            </v-flex>-->
        </v-layout>
        <h1> Liste des Sujets </h1>
        <v-layout>
            <v-flex xs12>
                   <v-data-table
                :headers="headers"
                :items="items"
                hide-actions
                class="elevation-1"
            >   
                <template slot="items" slot-scope="props">
                <td><v-icon>check_circle </v-icon></td>
                <td class="text-xs-right">{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.titre }}</td>
                <td class="text-xs-right">{{ props.item.description }}</td>
                <td class="text-xs-right">{{ props.item.encadrent }}</td>
                <td><v-icon>visibility</v-icon></td>
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
            { text: '', value: '' },
            { text: 'id', value: 'ID' },
            { text: 'titre', value: 'Titre' },
            { text: 'description', value: 'Description' },
            { text: 'encadrent', value: 'Encadrent' }
          ],
          items: [
            {id: '1', titre: 'gestion de stck chakri', description: 'application web ......', encadrent: 'Pr.bassir'},
            {id: '2', titre: 'gestion des PFEs', description: 'mobile', encadrent: 'Pr.timoumi'},
            {id: '3', titre: 'Gestion ...', description: 'desktop..', encadrent: 'Pr.homan'}
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
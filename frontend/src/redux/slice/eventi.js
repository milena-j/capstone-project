import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

 export async function getCollection(app, collectionName) {
    
    const db = getFirestore(app);

    const eventi = collection(db, collectionName);

    try {
        const snapshot = await getDocs(eventi);
        const data = snapshot.docs.map(doc => doc._document.data.value.mapValue.fields);
        return data;
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        return [];
    }
}

/*

export const fetchEventi = createAsyncThunk('eventi/fetchEventi', async () => {
    const db = getFirestore(app);
    const eventi = collection(db, 'Eventi');
    const snapshot = await getDocs(eventi);
    const data = snapshot.docs.map(doc => doc.data());
    return data;
}); */

const eventiSlice = createSlice({
    name: 'eventi',
    initialState: [],
    reducers: {
/* reducer per leggere, scrivere, modificare o rimuovere elementi dall'array eventi */
        leggiEventi: (state) => {
            return state;
        }

    },

});

export const { leggiEventi } = eventiSlice.actions;
export default eventiSlice.reducer;

/* nello slice è necessario definire il nome, lo stato iniziale e i reducers che contengono le azioni da eseguire,
è necessario esportare le azioni come nomeSlice.actions e il reducer come nomeSlice.reducer */



/* codeium */
/* reducer per leggere, scrivere, modificare o rimuovere elementi dall'array eventi */

/* leggiEventi: (state) => {
    return state;
},
scriviEventi: (state, action) => {
    return action.payload;
} */

/* reducer per l'aggiunta di un elemento all'interno dell'array eventi */

/* aggiungiEvento: (state, action) => {
    state.push(action.payload);
} */

/* reducer per la rimozione di un elemento all'interno dell'array eventi */

/* rimuoviEvento: (state, action) => {
    return state.filter(evento => evento.id !== action.payload);
} */



/* extraReducers: (builder) => {
builder.addCase(fetchEventi.fulfilled, (state, action) => {
    state.eventi = action.payload;
});
}, */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const fetchEventi = createAsyncThunk('eventi/fetchEventi', async () => {

    const eventiCollection = collection(db, 'Eventi');

    try {
        const eventiSnapshot = await getDocs(eventiCollection);
        const eventiList = eventiSnapshot.docs.map(doc => doc.data());
        return eventiList;
    } catch (error) {
        console.error('Errore durante il recupero dei dati:', error);
        return [];
    }
});

export const listaEventiSlice = createSlice({
    
    name: 'eventi',
    initialState: { list: [], status: 'idle', error: null },
    reducers: {},
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventi.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchEventi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = [];
                state.list = state.list.concat(action.payload);
            })
            .addCase(fetchEventi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default listaEventiSlice.reducer;
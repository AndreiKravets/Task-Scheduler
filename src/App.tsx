import React, {useEffect, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Todo from "./modules/todo";
import {Box, createTheme, Grid, ThemeProvider} from "@mui/material";
import Sidebar from "./modules/sidebar";
import TodoCalendar from "./modules/calendar";
import Dashboard from "./modules/dashboard";
import themeStore from "./store/theme"
import Themes from "./modules/themes";
import {observer} from "mobx-react-lite";
import Notes from "./modules/notes";
import Note from "./modules/notes/note";
import NoteDatails from "./modules/notes/note-deteils";


const App = observer( ()=>  {

    return (
        <ThemeProvider theme={themeStore.activeTheme}>
            <Grid container sx={{
                p: '3%',
                minHeight: '100vh',
                backgroundColor: 'background.paper'
            }}>
                <Grid container
                      sx={{maxWidth: '1600px', m: '0 auto', overflow: 'hidden', backgroundColor: 'primary.main'}}>
                    <Grid container sx={{overflow: 'hidden'}}>
                        <Grid item xs={12} sm={4} md={3} lg={2}
                              sx={{p: '40px 20px', backgroundColor: 'primary.main'}}>
                            <Sidebar/>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} lg={10}
                              sx={{p: 5, pt: 4, backgroundColor: 'background.default'}}>
                            <Grid container spacing={3} sx={{height: 'max-content'}}>
                                <Grid item xs={12}>
                                    <Dashboard/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={8}>
                                    <Routes>
                                        <Route path='/' element={<Todo/>}/>
                                        <Route path='/themes' element={<Themes/>}/>
                                        <Route path='notes'>
                                           <Route index element={<Notes/>}/>
                                            <Route path=':name'>
                                                <Route index element={<Note/>}/>
                                                <Route path=':note' element={<NoteDatails/>}/>
                                            </Route>
                                        </Route>
                                    </Routes>

                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={4}>
                                    <TodoCalendar/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
})

export default App;

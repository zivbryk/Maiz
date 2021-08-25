import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { notes } from '../data/notes.js'

export const noteService = {
    query,
    // saveCar,
    // deleteCar,
    // getCarById,
    // getNextCarId
}

const KEY = 'notes';

var gNotes

_createNotes();

function query(filterBy) {
    // if (filterBy) {
    //     let { vendor, minSpeed, maxSpeed } = filterBy
    //     maxSpeed = maxSpeed ? maxSpeed : Infinity
    //     minSpeed = minSpeed ? minSpeed : 0
    //     const carsToShow = gCars.filter(car => {
    //         return car.vendor.includes(vendor) &&
    //             car.speed >= minSpeed &&
    //             car.speed <= maxSpeed
    //     })
    //     return Promise.resolve(carsToShow)
    // }
    return Promise.resolve(gNotes)
}

function _createNotes() {
    gNotes = storageService.loadFromStorage(KEY)
    if (!gNotes || !gNotes.length) {
        gNotes = notes;
        _saveNotesToStorage();
    }
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes)
}
// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import ScheduleController from "./schedule_controller";

// Registra manualmente el controlador "schedule" en la aplicación Stimulus
application.register("schedule", ScheduleController);

// Carga automática (lazy/eager) de todos los controladores que se encuentren
// en la carpeta controllers, facilitando la organización de tu proyecto.
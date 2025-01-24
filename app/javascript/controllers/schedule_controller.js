import { Controller } from "@hotwired/stimulus"

// Controlador Stimulus para manejar los horarios dinámicos
export default class extends Controller {
  connect() {
    // Estructura interna para guardar los horarios en memoria
    this.scheduleData = {}
    this.maxSchedules = 9
    this.currentSchedulesCount = 0

    // Cada clave en this.scheduleData será un día (ej. "Lunes"),
    // y el valor será un array de strings con formato "HH:MM-HH:MM".
    // Ejemplo:
    // {
    //   "Lunes": ["07:00-08:00", "09:00-10:00"],
    //   "Martes": ["10:00-11:00"]
    // }

    // Sincronizamos el hidden_field si ya hay algo guardado
    this.loadExistingData()
  }

  // Carga datos existentes en caso de editar un Subject
  loadExistingData() {
    const scheduleField = document.getElementById("schedule_data")
    if (scheduleField.value.trim() !== "") {
      try {
        const parsed = JSON.parse(scheduleField.value)
        this.scheduleData = parsed
        // Opcional: reconstruir visualmente lo que ya esté almacenado
        this.rebuildUIFromData()
      } catch (e) {
        console.error("Error al parsear JSON existente:", e)
      }
    }
  }

  // Reconstruye la UI si existe data previa (opcional)
  rebuildUIFromData() {
    Object.keys(this.scheduleData).forEach(day => {
      this.scheduleData[day].forEach(timeRange => {
        this.currentSchedulesCount++
        // Podrías recrear visualmente cada horario, pero esto es opcional
      })
    })
    // No se muestra en detalle para no complicar más el ejemplo
  }

  // Evento: Al hacer clic en "Nuevo horario"
  addSchedule(event) {
    // Verificar si ya tenemos 9 o más horarios
    if (this.currentSchedulesCount >= this.maxSchedules) {
      alert(`Solo puedes agregar hasta ${this.maxSchedules} horarios.`)
      return
    }

    const container = document.getElementById("schedule-container")
    const template = document.getElementById("schedule-template")

    // Clonamos el contenido del template
    const clone = template.content.cloneNode(true)
    container.appendChild(clone)
  }

  // Evento: Al hacer clic en "Añadir"
  saveSchedule(event) {
    const row = event.target.closest(".schedule-row")
    if (!row) return

    // Tomamos valores del DOM
    const daySelect = row.querySelector(".day-select")
    const startTime = row.querySelector(".start-time")
    const endTime = row.querySelector(".end-time")

    const day = daySelect.value
    const start = startTime.value
    const end = endTime.value

    // Validar que el usuario haya seleccionado horas
    if (!start || !end) {
      alert("Debes indicar la hora de inicio y la hora de fin.")
      return
    }

    // Construimos el string "HH:MM-HH:MM"
    const timeRange = `${start}-${end}`

    // Agregar al objeto this.scheduleData
    // Si no existe la clave de ese día, la creamos
    if (!this.scheduleData[day]) {
      this.scheduleData[day] = []
    }

    // Añadir la hora
    this.scheduleData[day].push(timeRange)
    this.currentSchedulesCount++

    // Verificamos si alcanzamos el límite
    if (this.currentSchedulesCount > this.maxSchedules) {
      // Revertimos el añadido
      this.scheduleData[day].pop()
      this.currentSchedulesCount--
      alert(`Solo puedes agregar hasta ${this.maxSchedules} horarios.`)
      return
    }

    // Actualizar el hidden_field con la nueva data en formato JSON
    this.updateScheduleField()

    // Bloquear la fila o quitarla de la vista, según prefieras
    // Aquí, simplemente la removemos, asumiendo que ya se "guardó".
    row.remove()
  }

  // Evento: Al hacer clic en "Cancelar"
  cancelSchedule(event) {
    const row = event.target.closest(".schedule-row")
    if (row) row.remove()
  }

  // Método para actualizar el hidden_field
  updateScheduleField() {
    const scheduleField = document.getElementById("schedule_data")
    scheduleField.value = JSON.stringify(this.scheduleData)
  }
}
"use strict";

/* =========================================================
   FOCUS FOREST · ROCÍO
   Aplicación PWA con almacenamiento local.
========================================================= */

const STORAGE_KEY = "focusForestRocioDataV1";

const DAY_NAMES = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

const SHORT_DAY_NAMES = ["DOM", "LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

const VIEW_CONFIG = {
  today: {
    title: "Mi día",
    eyebrow: "FOCUS FOREST"
  },
  calendar: {
    title: "Calendario",
    eyebrow: "ORGANIZACIÓN"
  },
  training: {
    title: "Entrenamientos",
    eyebrow: "DEPORTE"
  },
  water: {
    title: "Agua",
    eyebrow: "HIDRATACIÓN"
  },
  supplements: {
    title: "Suplementos",
    eyebrow: "BIENESTAR"
  },
  food: {
    title: "Comer bien",
    eyebrow: "NUTRICIÓN"
  },
  goals: {
    title: "Metas",
    eyebrow: "CONSTANCIA"
  },
  statistics: {
    title: "Estadísticas",
    eyebrow: "PROGRESO"
  },
  forest: {
    title: "Mi bosque",
    eyebrow: "RECOMPENSAS"
  },
  profile: {
    title: "Perfil",
    eyebrow: "ROCÍO"
  }
};

const defaultState = {
  profile: {
    name: "Rocío",
    waterGoal: 2500,
    quietStart: "22:30",
    quietEnd: "07:00",
    darkMode: false,
    animations: true,
    reminders: false
  },

  water: {
    current: 1000,
    history: [1750, 2250, 2000, 2500, 1500, 2400, 1000],
    streak: 7,
    additions: []
  },

  trainings: [
    {
      id: "training-1",
      day: 1,
      name: "Gimnasio",
      icon: "🏋️",
      time: "17:30",
      endTime: "18:30",
      duration: 60,
      location: "Gimnasio",
      type: "Fuerza",
      intensity: "Alta",
      style: "training-green",
      completed: false
    },
    {
      id: "training-2",
      day: 1,
      name: "Jiu-jitsu",
      icon: "🥋",
      time: "19:00",
      endTime: "20:00",
      duration: 60,
      location: "Dojo central",
      type: "Técnica",
      intensity: "Alta",
      style: "training-purple",
      completed: false
    },
    {
      id: "training-3",
      day: 2,
      name: "Gimnasio",
      icon: "🏋️",
      time: "17:00",
      endTime: "18:00",
      duration: 60,
      location: "Gimnasio",
      type: "Piernas",
      intensity: "Alta",
      style: "training-green",
      completed: true
    },
    {
      id: "training-4",
      day: 2,
      name: "Jiu-jitsu",
      icon: "🥋",
      time: "19:00",
      endTime: "20:00",
      duration: 60,
      location: "Dojo central",
      type: "Sparring",
      intensity: "Alta",
      style: "training-purple",
      completed: true
    },
    {
      id: "training-5",
      day: 3,
      name: "Movilidad",
      icon: "🧘",
      time: "20:30",
      endTime: "21:00",
      duration: 30,
      location: "Casa",
      type: "Recuperación",
      intensity: "Baja",
      style: "training-orange",
      completed: false
    },
    {
      id: "training-6",
      day: 5,
      name: "Jiu-jitsu",
      icon: "🥋",
      time: "19:00",
      endTime: "20:00",
      duration: 60,
      location: "Dojo central",
      type: "Técnica",
      intensity: "Alta",
      style: "training-purple",
      completed: false
    },
    {
      id: "training-7",
      day: 6,
      name: "Rugby",
      icon: "🏉",
      time: "11:00",
      endTime: "12:30",
      duration: 90,
      location: "Cancha",
      type: "Equipo",
      intensity: "Alta",
      style: "training-orange",
      completed: false
    }
  ],

  routine: [
    {
      id: "routine-1",
      name: "Calentamiento",
      details: "10 minutos de movilidad y activación"
    },
    {
      id: "routine-2",
      name: "Técnica",
      details: "20 minutos de técnica controlada"
    },
    {
      id: "routine-3",
      name: "Posiciones específicas",
      details: "20 minutos de práctica"
    },
    {
      id: "routine-4",
      name: "Sparring",
      details: "10 minutos de trabajo final"
    }
  ],

  trainingLog: {
    energy: 4,
    pain: "Ninguna",
    notes: ""
  },

  supplements: [
    {
      id: "supplement-1",
      name: "Proteína",
      icon: "🥛",
      instruction: "Después del entrenamiento",
      time: "19:30",
      completed: false
    },
    {
      id: "supplement-2",
      name: "Magnesio",
      icon: "🌙",
      instruction: "Antes de dormir",
      time: "22:00",
      completed: false
    },
    {
      id: "supplement-3",
      name: "Calcio",
      icon: "🦴",
      instruction: "Con la cena",
      time: "20:30",
      completed: false
    },
    {
      id: "supplement-4",
      name: "Vitaminas",
      icon: "☀️",
      instruction: "Con el desayuno",
      time: "08:00",
      completed: true
    }
  ],

  meals: [
    {
      id: "meal-1",
      name: "Desayuno",
      icon: "🥣",
      description: "Avena con frutas y nueces",
      completed: true
    },
    {
      id: "meal-2",
      name: "Almuerzo",
      icon: "🥗",
      description: "Pollo, quinoa y ensalada",
      completed: true
    },
    {
      id: "meal-3",
      name: "Once",
      icon: "🥛",
      description: "Yogur griego con frutos rojos",
      completed: false
    },
    {
      id: "meal-4",
      name: "Cena",
      icon: "🐟",
      description: "Salmón, camote y verduras",
      completed: false
    },
    {
      id: "meal-5",
      name: "Colación",
      icon: "🍎",
      description: "Fruta y almendras",
      completed: true
    }
  ],

  goals: [
    {
      id: "goal-1",
      name: "Entrenar",
      icon: "🏋️",
      completed: true
    },
    {
      id: "goal-2",
      name: "Beber 2.500 ml de agua",
      icon: "💧",
      completed: false
    },
    {
      id: "goal-3",
      name: "Comer saludable",
      icon: "🥗",
      completed: true
    },
    {
      id: "goal-4",
      name: "Tomar suplementos",
      icon: "💊",
      completed: false
    }
  ],

  recipes: [
    {
      name: "Panqueques proteicos",
      emoji: "🥞",
      description: "Plátano, huevo, avena y proteína.",
      time: "15 min",
      protein: "28 g proteína"
    },
    {
      name: "Bowl de pollo y arroz",
      emoji: "🍲",
      description: "Pollo, arroz, palta y vegetales.",
      time: "25 min",
      protein: "42 g proteína"
    },
    {
      name: "Yogur con fruta y avena",
      emoji: "🥣",
      description: "Yogur natural, fruta, avena y semillas.",
      time: "5 min",
      protein: "20 g proteína"
    },
    {
      name: "Wrap de pollo",
      emoji: "🌯",
      description: "Tortilla, pollo, lechuga, tomate y palta.",
      time: "15 min",
      protein: "35 g proteína"
    },
    {
      name: "Batido de plátano",
      emoji: "🥤",
      description: "Leche, plátano, avena y proteína.",
      time: "5 min",
      protein: "32 g proteína"
    },
    {
      name: "Huevos con tostadas",
      emoji: "🍳",
      description: "Huevos, tostadas integrales y palta.",
      time: "12 min",
      protein: "24 g proteína"
    }
  ],

  selectedRecipe: 0,
  favoriteRecipes: [],

  statistics: {
    training: [1, 0, 1, 1, 0, 1, 0],
    water: [1750, 2250, 2000, 2500, 1500, 2400, 1000],
    meals: [4, 5, 3, 4, 5, 4, 3]
  },

  forest: {
    points: 80
  },

  selectedCalendarDay: new Date().getDay()
};

let state = loadState();
let currentView = "today";
let toastTimeout = null;

/* =========================================================
   SELECTORES
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  applyPreferences();
  bindGlobalEvents();
  updateCurrentDate();
  renderAll();
  updateOnlineStatus();
  registerServiceWorker();
}

/* =========================================================
   ALMACENAMIENTO
========================================================= */

function loadState() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);

    if (!savedState) {
      return structuredClone(defaultState);
    }

    const parsed = JSON.parse(savedState);

    return mergeDeep(structuredClone(defaultState), parsed);
  } catch (error) {
    console.error("No se pudieron cargar los datos:", error);
    return structuredClone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error("No se pudieron guardar los datos:", error);
    showToast("No fue posible guardar los cambios.");
  }
}

function mergeDeep(target, source) {
  if (!source || typeof source !== "object") {
    return target;
  }

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (
      sourceValue &&
      typeof sourceValue === "object" &&
      !Array.isArray(sourceValue) &&
      targetValue &&
      typeof targetValue === "object" &&
      !Array.isArray(targetValue)
    ) {
      target[key] = mergeDeep(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

/* =========================================================
   EVENTOS GENERALES
========================================================= */

function bindGlobalEvents() {
  $("#menuButton").addEventListener("click", openMenu);
  $("#closeMenuButton").addEventListener("click", closeMenu);
  $("#menuBackdrop").addEventListener("click", closeMenu);

  $("#mainAddButton").addEventListener("click", openQuickAddModal);
  $("#closeModalButton").addEventListener("click", closeModal);

  $("#modalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "modalBackdrop") {
      closeModal();
    }
  });

  $$("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
      closeMenu();
    });
  });

  $$("[data-go-view]").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.goView);
    });
  });

  $("#quickWaterButton").addEventListener("click", () => addWater(250));

  $$("[data-water]").forEach((button) => {
    button.addEventListener("click", () => {
      addWater(Number(button.dataset.water));
    });
  });

  $("#undoWaterButton").addEventListener("click", undoWater);

  $("#saveWaterGoalButton").addEventListener("click", saveWaterGoal);

  $("#addTrainingButton").addEventListener("click", openTrainingForm);
  $("#addSupplementButton").addEventListener("click", openSupplementForm);
  $("#addGoalButton").addEventListener("click", openGoalForm);

  $("#newRecipeButton").addEventListener("click", selectNewRecipe);
  $("#favoriteRecipeButton").addEventListener("click", toggleFavoriteRecipe);

  $("#energyRange").addEventListener("input", saveTrainingFeeling);
  $("#painSelect").addEventListener("change", saveTrainingFeeling);
  $("#trainingNotes").addEventListener("input", saveTrainingFeeling);

  $("#completeTrainingButton").addEventListener(
    "click",
    completeCurrentTraining
  );

  $("#remindTrainingButton").addEventListener(
    "click",
    requestTrainingReminder
  );

  $("#changeTrainingButton").addEventListener(
    "click",
    openTrainingTimeEditor
  );

  $("#editRoutineButton").addEventListener("click", openRoutineEditor);

  $("#saveProfileButton").addEventListener("click", saveProfile);
  $("#darkModeSwitch").addEventListener("change", toggleDarkMode);
  $("#animationSwitch").addEventListener("change", toggleAnimations);
  $("#reminderSwitch").addEventListener("change", toggleReminders);
  $("#themeButton").addEventListener("click", quickThemeToggle);

  $("#notificationButton").addEventListener(
    "click",
    requestNotificationPermission
  );

  $("#exportDataButton").addEventListener("click", exportData);
  $("#resetDataButton").addEventListener("click", resetData);

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
}

/* =========================================================
   NAVEGACIÓN
========================================================= */

function showView(viewName) {
  if (!VIEW_CONFIG[viewName]) {
    return;
  }

  currentView = viewName;

  $$(".view").forEach((view) => {
    view.classList.remove("active-view");
  });

  const target = $(`#${viewName}View`);

  if (target) {
    target.classList.add("active-view");
  }

  $("#pageTitle").textContent = VIEW_CONFIG[viewName].title;
  $("#pageEyebrow").textContent = VIEW_CONFIG[viewName].eyebrow;

  $$(".bottom-nav-button").forEach((button) => {
    button.classList.toggle(
      "active-nav",
      button.dataset.view === viewName
    );
  });

  window.scrollTo({
    top: 0,
    behavior: state.profile.animations ? "smooth" : "auto"
  });

  renderAll();
}

function openMenu() {
  $("#sideMenu").classList.add("open-menu");
  $("#sideMenu").setAttribute("aria-hidden", "false");
  $("#menuBackdrop").classList.remove("hidden");
}

function closeMenu() {
  $("#sideMenu").classList.remove("open-menu");
  $("#sideMenu").setAttribute("aria-hidden", "true");
  $("#menuBackdrop").classList.add("hidden");
}

/* =========================================================
   RENDERIZADO GENERAL
========================================================= */

function renderAll() {
  synchronizeAutomaticGoals();

  renderToday();
  renderCalendar();
  renderTraining();
  renderWater();
  renderSupplements();
  renderMeals();
  renderGoals();
  renderStatistics();
  renderForest();
  renderProfile();

  saveState();
}

/* =========================================================
   FECHA
========================================================= */

function updateCurrentDate() {
  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(new Date());

  $("#currentDate").textContent =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

/* =========================================================
   PANTALLA PRINCIPAL
========================================================= */

function renderToday() {
  const today = new Date().getDay();

  let todayTrainings = state.trainings.filter(
    (training) => training.day === today
  );

  if (!todayTrainings.length) {
    todayTrainings = state.trainings.filter(
      (training) => !training.completed
    ).slice(0, 2);
  }

  $("#todayTrainingList").innerHTML = todayTrainings.length
    ? todayTrainings
        .slice(0, 3)
        .map(createTrainingCard)
        .join("")
    : createEmptyState("🌿", "Hoy no tienes entrenamientos programados.");

  const waterPercent = calculatePercentage(
    state.water.current,
    state.profile.waterGoal
  );

  const glassGoal = Math.max(
    1,
    Math.round(state.profile.waterGoal / 250)
  );

  const completedGlasses = Math.min(
    glassGoal,
    Math.floor(state.water.current / 250)
  );

  $("#waterDrops").innerHTML = Array.from(
    { length: Math.min(glassGoal, 10) },
    (_, index) => {
      const filled = index < completedGlasses;

      return `
        <span class="${filled ? "" : "water-drop-empty"}">
          💧
        </span>
      `;
    }
  ).join("");

  setRingValue($("#miniWaterRing"), waterPercent);
  $("#miniWaterPercent").textContent = `${waterPercent}%`;

  const mealCompleted = countCompleted(state.meals);
  const supplementCompleted = countCompleted(state.supplements);
  const goalCompleted = countCompleted(state.goals);
  const dayProgress = calculateDayProgress();

  $("#todayMealsSummary").textContent =
    `${mealCompleted}/${state.meals.length} completadas`;

  $("#todaySupplementsSummary").textContent =
    `${supplementCompleted}/${state.supplements.length} completados`;

  $("#todayGoalsSummary").textContent =
    `${goalCompleted}/${state.goals.length} completadas`;

  $("#todayProgressSummary").textContent = `${dayProgress}%`;
  $("#heroProgressText").textContent = `${dayProgress}%`;
  $("#heroProgressBar").style.width = `${dayProgress}%`;

  renderImportantPending();
}

function renderImportantPending() {
  const pendingItems = [];

  if (state.water.current < state.profile.waterGoal) {
    pendingItems.push(
      `Te faltan ${formatNumber(
        state.profile.waterGoal - state.water.current
      )} ml de agua.`
    );
  }

  const pendingSupplement = state.supplements.find(
    (supplement) => !supplement.completed
  );

  if (pendingSupplement) {
    pendingItems.push(`Tomar ${pendingSupplement.name.toLowerCase()}.`);
  }

  const pendingMeal = state.meals.find((meal) => !meal.completed);

  if (pendingMeal) {
    pendingItems.push(`Completar ${pendingMeal.name.toLowerCase()}.`);
  }

  const pendingTraining = state.trainings.find(
    (training) => !training.completed
  );

  if (pendingTraining) {
    pendingItems.push(
      `${pendingTraining.name} a las ${pendingTraining.time}.`
    );
  }

  if (!pendingItems.length) {
    $("#importantPendingList").innerHTML = `
      <strong>¡Día completado! 🌳</strong>
      <p>Todos tus hábitos principales están listos.</p>
    `;

    return;
  }

  $("#importantPendingList").innerHTML = `
    <ul>
      ${pendingItems
        .slice(0, 4)
        .map((item) => `<li>${escapeHTML(item)}</li>`)
        .join("")}
    </ul>
  `;
}

function calculateDayProgress() {
  const waterScore =
    state.water.current >= state.profile.waterGoal ? 1 : 0;

  const mealScore =
    state.meals.length > 0
      ? countCompleted(state.meals) / state.meals.length
      : 0;

  const supplementScore =
    state.supplements.length > 0
      ? countCompleted(state.supplements) / state.supplements.length
      : 0;

  const goalScore =
    state.goals.length > 0
      ? countCompleted(state.goals) / state.goals.length
      : 0;

  return Math.round(
    ((waterScore + mealScore + supplementScore + goalScore) / 4) * 100
  );
}

/* =========================================================
   CALENDARIO
========================================================= */

function renderCalendar() {
  renderWeekSelector();

  const selectedDay = state.selectedCalendarDay;

  const selectedTrainings = state.trainings.filter(
    (training) => training.day === selectedDay
  );

  $("#selectedDayTitle").textContent =
    `${DAY_NAMES[selectedDay]} · Entrenamientos`;

  $("#calendarTrainingList").innerHTML = selectedTrainings.length
    ? selectedTrainings.map(createTrainingCard).join("")
    : createEmptyState(
        "🌿",
        `No hay actividades para el ${DAY_NAMES[
          selectedDay
        ].toLowerCase()}.`
      );

  const completed = state.trainings.filter(
    (training) => training.completed
  );

  $("#completedTrainingList").innerHTML = completed.length
    ? completed
        .slice(-4)
        .reverse()
        .map(createTrainingCard)
        .join("")
    : createEmptyState("🏁", "Todavía no hay entrenamientos completados.");

  bindTrainingCardEvents();
}

function renderWeekSelector() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;

  const weekDates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + mondayOffset + index);
    return date;
  });

  $("#weekSelector").innerHTML = weekDates
    .map((date) => {
      const dayIndex = date.getDay();
      const isSelected = dayIndex === state.selectedCalendarDay;

      return `
        <button
          class="day-button ${isSelected ? "selected-day" : ""}"
          type="button"
          data-calendar-day="${dayIndex}"
        >
          ${SHORT_DAY_NAMES[dayIndex]}
          <strong>${date.getDate()}</strong>
        </button>
      `;
    })
    .join("");

  $$("[data-calendar-day]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCalendarDay = Number(button.dataset.calendarDay);
      renderCalendar();
      saveState();
    });
  });
}

function createTrainingCard(training) {
  return `
    <article
      class="list-card ${training.style || "training-green"}"
      data-training-id="${escapeHTML(training.id)}"
    >
      <div class="list-icon">${training.icon}</div>

      <div>
        <h3>${escapeHTML(training.name)}</h3>
        <p>
          ${escapeHTML(training.type)} ·
          ${escapeHTML(training.location)}
        </p>
      </div>

      <div class="list-time">
        <strong>${escapeHTML(training.time)}</strong>
        <span>
          ${training.completed ? "Completado ✓" : `${training.duration} min`}
        </span>
      </div>
    </article>
  `;
}

function bindTrainingCardEvents() {
  $$("[data-training-id]").forEach((card) => {
    card.addEventListener("click", () => {
      openTrainingDetail(card.dataset.trainingId);
    });
  });
}

/* =========================================================
   ENTRENAMIENTO
========================================================= */

function renderTraining() {
  const nextTraining =
    state.trainings.find((training) => !training.completed) ||
    state.trainings[0];

  if (nextTraining) {
    $("#nextTrainingName").textContent = nextTraining.name;
    $("#nextTrainingTime").textContent =
      `${DAY_NAMES[nextTraining.day]} · ` +
      `${nextTraining.time}–${nextTraining.endTime}`;

    $("#nextTrainingStatus").textContent =
      nextTraining.completed ? "Completado" : "Pendiente";

    $("#nextTrainingStatus").className =
      `status-badge ${
        nextTraining.completed
          ? "completed-status"
          : "pending-status"
      }`;
  }

  $("#routineList").innerHTML = state.routine
    .map(
      (item, index) => `
        <article class="routine-item">
          <div class="routine-number">${index + 1}</div>

          <div>
            <strong>${escapeHTML(item.name)}</strong>
            <span>${escapeHTML(item.details)}</span>
          </div>
        </article>
      `
    )
    .join("");

  $("#energyRange").value = state.trainingLog.energy;
  $("#energyOutput").textContent =
    `${state.trainingLog.energy}/5 ⚡`;

  $("#painSelect").value = state.trainingLog.pain;
  $("#trainingNotes").value = state.trainingLog.notes;
}

function saveTrainingFeeling() {
  state.trainingLog.energy = Number($("#energyRange").value);
  state.trainingLog.pain = $("#painSelect").value;
  state.trainingLog.notes = $("#trainingNotes").value.trim();

  $("#energyOutput").textContent =
    `${state.trainingLog.energy}/5 ⚡`;

  if (state.trainingLog.pain === "Fuerte") {
    showToast(
      "Dolor fuerte registrado. Detén la sesión y busca orientación profesional."
    );
  }

  saveState();
}

function completeCurrentTraining() {
  const nextTraining = state.trainings.find(
    (training) => !training.completed
  );

  if (!nextTraining) {
    showToast("Todos tus entrenamientos están completados.");
    return;
  }

  nextTraining.completed = true;

  const todayIndex = new Date().getDay();
  const statisticsIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  state.statistics.training[statisticsIndex] = 1;
  state.forest.points += 20;

  vibrateDevice(40);
  showToast(`¡${nextTraining.name} completado! Tu bosque creció 🌳`);

  renderAll();
}

function requestTrainingReminder() {
  if (
    "Notification" in window &&
    Notification.permission === "granted"
  ) {
    setTimeout(() => {
      new Notification("Focus Forest 🌿", {
        body: "Rocío, recuerda completar tu entrenamiento.",
        icon: "./icons/icon-192.svg"
      });
    }, 5000);

    showToast("Recordatorio de prueba programado para 5 segundos.");
    return;
  }

  requestNotificationPermission();
}

function openTrainingTimeEditor() {
  const nextTraining = state.trainings.find(
    (training) => !training.completed
  );

  if (!nextTraining) {
    showToast("No tienes entrenamientos pendientes.");
    return;
  }

  openModal({
    eyebrow: "CAMBIAR HORARIO",
    title: nextTraining.name,
    content: `
      <form id="trainingTimeForm">
        <label class="form-label">
          Hora de inicio
          <input
            id="trainingStartTime"
            type="time"
            value="${escapeHTML(nextTraining.time)}"
            required
          >
        </label>

        <label class="form-label">
          Hora de término
          <input
            id="trainingEndTime"
            type="time"
            value="${escapeHTML(nextTraining.endTime)}"
            required
          >
        </label>

        <button class="primary-button full-width" type="submit">
          Guardar horario
        </button>
      </form>
    `
  });

  $("#trainingTimeForm").addEventListener("submit", (event) => {
    event.preventDefault();

    nextTraining.time = $("#trainingStartTime").value;
    nextTraining.endTime = $("#trainingEndTime").value;

    saveState();
    closeModal();
    renderAll();
    showToast("Horario actualizado.");
  });
}

function openTrainingDetail(trainingId) {
  const training = state.trainings.find(
    (item) => item.id === trainingId
  );

  if (!training) {
    return;
  }

  openModal({
    eyebrow: "DETALLE DEL ENTRENAMIENTO",
    title: training.name,
    content: `
      <div class="training-focus-card">
        <div class="training-focus-icon">${training.icon}</div>

        <div class="training-focus-content">
          <span>${DAY_NAMES[training.day].toUpperCase()}</span>
          <h2>${escapeHTML(training.name)}</h2>
          <p>${training.time}–${training.endTime}</p>
        </div>

        <span class="status-badge ${
          training.completed
            ? "completed-status"
            : "pending-status"
        }">
          ${training.completed ? "Completado" : "Pendiente"}
        </span>
      </div>

      <div class="section-block">
        <p><strong>Lugar:</strong> ${escapeHTML(training.location)}</p>
        <p><strong>Tipo:</strong> ${escapeHTML(training.type)}</p>
        <p><strong>Intensidad:</strong> ${escapeHTML(training.intensity)}</p>
        <p><strong>Duración:</strong> ${training.duration} minutos</p>
      </div>

      <button
        id="modalCompleteTraining"
        class="primary-button full-width"
        type="button"
      >
        ${training.completed ? "Marcar pendiente" : "Marcar completado"}
      </button>
    `
  });

  $("#modalCompleteTraining").addEventListener("click", () => {
    training.completed = !training.completed;

    if (training.completed) {
      state.forest.points += 20;
    } else {
      state.forest.points = Math.max(0, state.forest.points - 20);
    }

    saveState();
    closeModal();
    renderAll();
  });
}

function openTrainingForm() {
  openModal({
    eyebrow: "NUEVA ACTIVIDAD",
    title: "Agregar entrenamiento",
    content: `
      <form id="newTrainingForm">
        <label class="form-label">
          Actividad
          <select id="newTrainingName" required>
            <option value="Gimnasio">Gimnasio</option>
            <option value="Jiu-jitsu">Jiu-jitsu</option>
            <option value="Taekwondo">Taekwondo</option>
            <option value="Rugby">Rugby</option>
            <option value="Cardio">Cardio</option>
            <option value="Movilidad">Movilidad</option>
            <option value="Recuperación">Recuperación</option>
          </select>
        </label>

        <label class="form-label">
          Día
          <select id="newTrainingDay" required>
            ${DAY_NAMES.map(
              (day, index) => `
                <option
                  value="${index}"
                  ${
                    index === state.selectedCalendarDay
                      ? "selected"
                      : ""
                  }
                >
                  ${day}
                </option>
              `
            ).join("")}
          </select>
        </label>

        <label class="form-label">
          Hora de inicio
          <input id="newTrainingTime" type="time" value="17:30" required>
        </label>

        <label class="form-label">
          Hora de término
          <input id="newTrainingEndTime" type="time" value="18:30" required>
        </label>

        <label class="form-label">
          Lugar
          <input
            id="newTrainingLocation"
            type="text"
            value="Gimnasio"
            required
          >
        </label>

        <label class="form-label">
          Intensidad
          <select id="newTrainingIntensity">
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta" selected>Alta</option>
          </select>
        </label>

        <button class="primary-button full-width" type="submit">
          Guardar entrenamiento
        </button>
      </form>
    `
  });

  $("#newTrainingForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = $("#newTrainingName").value;
    const iconMap = {
      "Gimnasio": "🏋️",
      "Jiu-jitsu": "🥋",
      "Taekwondo": "🥋",
      "Rugby": "🏉",
      "Cardio": "🏃",
      "Movilidad": "🧘",
      "Recuperación": "🌿"
    };

    state.trainings.push({
      id: createId("training"),
      day: Number($("#newTrainingDay").value),
      name,
      icon: iconMap[name] || "🏃",
      time: $("#newTrainingTime").value,
      endTime: $("#newTrainingEndTime").value,
      duration: calculateDuration(
        $("#newTrainingTime").value,
        $("#newTrainingEndTime").value
      ),
      location: $("#newTrainingLocation").value.trim(),
      type: name,
      intensity: $("#newTrainingIntensity").value,
      style:
        name.includes("Jiu")
          ? "training-purple"
          : name === "Movilidad" || name === "Rugby"
            ? "training-orange"
            : "training-green",
      completed: false
    });

    saveState();
    closeModal();
    renderAll();
    showToast("Entrenamiento agregado.");
  });
}

function openRoutineEditor() {
  openModal({
    eyebrow: "EDITAR RUTINA",
    title: "Rutina del día",
    content: `
      <form id="routineForm">
        ${state.routine
          .map(
            (item, index) => `
              <label class="form-label">
                Ejercicio ${index + 1}
                <input
                  data-routine-name="${index}"
                  type="text"
                  value="${escapeAttribute(item.name)}"
                >
              </label>

              <label class="form-label">
                Detalle
                <input
                  data-routine-detail="${index}"
                  type="text"
                  value="${escapeAttribute(item.details)}"
                >
              </label>
            `
          )
          .join("")}

        <button class="primary-button full-width" type="submit">
          Guardar rutina
        </button>
      </form>
    `
  });

  $("#routineForm").addEventListener("submit", (event) => {
    event.preventDefault();

    state.routine.forEach((item, index) => {
      item.name =
        $(`[data-routine-name="${index}"]`).value.trim() ||
        `Ejercicio ${index + 1}`;

      item.details =
        $(`[data-routine-detail="${index}"]`).value.trim() ||
        "Sin detalles";
    });

    saveState();
    closeModal();
    renderAll();
    showToast("Rutina actualizada.");
  });
}

/* =========================================================
   AGUA
========================================================= */

function renderWater() {
  const goal = state.profile.waterGoal;
  const current = state.water.current;
  const percent = calculatePercentage(current, goal);
  const glassesGoal = Math.max(1, Math.round(goal / 250));
  const glassesTaken = Math.min(
    glassesGoal,
    Math.floor(current / 250)
  );

  $("#waterCurrentAmount").textContent = `${formatNumber(current)} ml`;
  $("#waterGoalAmount").textContent = `de ${formatNumber(goal)} ml`;
  $("#waterMainPercent").textContent = `${percent}%`;

  setRingValue($("#waterProgressRing"), percent);

  $("#waterMetricGoal").textContent = `${formatNumber(goal)} ml`;
  $("#waterMetricGlasses").textContent =
    `${glassesTaken} de ${glassesGoal}`;

  $("#waterMetricStreak").textContent =
    `${state.water.streak} días`;

  $("#waterGoalInput").value = goal;

  updateWaterEncouragement(percent);
}

function addWater(amount) {
  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    return;
  }

  state.water.current += numericAmount;
  state.water.additions.push(numericAmount);

  const todayIndex = new Date().getDay();
  const statisticsIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  state.statistics.water[statisticsIndex] = state.water.current;

  if (state.water.current >= state.profile.waterGoal) {
    state.forest.points += 5;
  }

  vibrateDevice(25);
  showToast(`Agregaste ${numericAmount} ml de agua 💧`);

  renderAll();
}

function undoWater() {
  const lastAmount = state.water.additions.pop();

  if (!lastAmount) {
    showToast("No hay una cantidad reciente para deshacer.");
    return;
  }

  state.water.current = Math.max(
    0,
    state.water.current - lastAmount
  );

  const todayIndex = new Date().getDay();
  const statisticsIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  state.statistics.water[statisticsIndex] = state.water.current;

  renderAll();
  showToast(`Se quitaron ${lastAmount} ml.`);
}

function saveWaterGoal() {
  const newGoal = Number($("#waterGoalInput").value);

  if (!Number.isFinite(newGoal) || newGoal < 500 || newGoal > 6000) {
    showToast("La meta debe estar entre 500 y 6.000 ml.");
    return;
  }

  state.profile.waterGoal = newGoal;
  synchronizeWaterGoalText();

  renderAll();
  showToast("Meta de agua guardada.");
}

function updateWaterEncouragement(percent) {
  let title = "¡Comencemos!";
  let text = "Tu cuerpo necesita agua para rendir.";

  if (percent >= 100) {
    title = "¡Meta completada!";
    text = "Excelente trabajo. Mantén una hidratación equilibrada.";
  } else if (percent >= 75) {
    title = "¡Ya falta poco!";
    text = "Estás muy cerca de completar tu meta.";
  } else if (percent >= 50) {
    title = "¡Sigue así!";
    text = "Ya superaste la mitad de tu hidratación.";
  } else if (percent >= 25) {
    title = "Buen comienzo";
    text = "Sigue agregando agua durante el día.";
  }

  $("#waterEncouragementTitle").textContent = title;
  $("#waterEncouragementText").textContent = text;
}

/* =========================================================
   SUPLEMENTOS
========================================================= */

function renderSupplements() {
  $("#supplementsList").innerHTML = state.supplements.length
    ? state.supplements
        .map((supplement) =>
          createCheckItem({
            type: "supplement",
            id: supplement.id,
            icon: supplement.icon,
            name: supplement.name,
            description:
              `${supplement.instruction} · ${supplement.time}`,
            completed: supplement.completed
          })
        )
        .join("")
    : createEmptyState("💊", "No tienes suplementos registrados.");

  const completed = countCompleted(state.supplements);
  const percent = calculatePercentage(
    completed,
    state.supplements.length || 1
  );

  $("#supplementsProgressText").textContent =
    `${completed}/${state.supplements.length} completados`;

  $("#supplementsPercent").textContent = `${percent}%`;
  setRingValue($("#supplementsRing"), percent);

  bindCheckItemEvents();
}

/* =========================================================
   COMIDAS
========================================================= */

function renderMeals() {
  $("#mealsList").innerHTML = state.meals
    .map((meal) =>
      createCheckItem({
        type: "meal",
        id: meal.id,
        icon: meal.icon,
        name: meal.name,
        description: meal.description,
        completed: meal.completed
      })
    )
    .join("");

  const recipe = state.recipes[state.selectedRecipe];

  $("#recipeEmoji").textContent = recipe.emoji;
  $("#recipeName").textContent = recipe.name;
  $("#recipeDescription").textContent = recipe.description;
  $("#recipeTime").textContent = `⏱ ${recipe.time}`;
  $("#recipeProtein").textContent = `💪 ${recipe.protein}`;

  const favorite = state.favoriteRecipes.includes(recipe.name);

  $("#favoriteRecipeButton").textContent =
    favorite ? "♥ Guardada" : "♡ Guardar";

  const weeklyMeals = [
    {
      icon: "🥣",
      name: "Desayuno",
      text: "Avena con plátano y semillas"
    },
    {
      icon: "🥗",
      name: "Almuerzo",
      text: "Carne, arroz integral y ensalada"
    },
    {
      icon: "🥛",
      name: "Once",
      text: "Yogur griego con miel y frutas"
    },
    {
      icon: "🐟",
      name: "Cena",
      text: "Pescado al horno con verduras"
    },
    {
      icon: "🍎",
      name: "Colación",
      text: "Manzana con mantequilla de maní"
    }
  ];

  $("#weeklyMealPlan").innerHTML = weeklyMeals
    .map(
      (meal) => `
        <article class="weekly-meal-item">
          <span>${meal.icon}</span>

          <div>
            <strong>${meal.name}</strong>
            <p>${meal.text}</p>
          </div>
        </article>
      `
    )
    .join("");

  bindCheckItemEvents();
}

function selectNewRecipe() {
  let nextIndex = state.selectedRecipe;

  while (
    nextIndex === state.selectedRecipe &&
    state.recipes.length > 1
  ) {
    nextIndex = Math.floor(Math.random() * state.recipes.length);
  }

  state.selectedRecipe = nextIndex;
  saveState();
  renderMeals();
}

function toggleFavoriteRecipe() {
  const recipe = state.recipes[state.selectedRecipe];
  const favoriteIndex = state.favoriteRecipes.indexOf(recipe.name);

  if (favoriteIndex >= 0) {
    state.favoriteRecipes.splice(favoriteIndex, 1);
    showToast("Receta eliminada de favoritas.");
  } else {
    state.favoriteRecipes.push(recipe.name);
    showToast("Receta guardada como favorita.");
  }

  saveState();
  renderMeals();
}

/* =========================================================
   METAS
========================================================= */

function renderGoals() {
  $("#goalsList").innerHTML = state.goals.length
    ? state.goals
        .map((goal) =>
          createCheckItem({
            type: "goal",
            id: goal.id,
            icon: goal.icon,
            name: goal.name,
            description: "Meta diaria",
            completed: goal.completed
          })
        )
        .join("")
    : createEmptyState("🎯", "Todavía no has creado metas.");

  const completed = countCompleted(state.goals);
  const percent = calculatePercentage(
    completed,
    state.goals.length || 1
  );

  $("#weeklyProgressText").textContent = `${percent}%`;
  $("#weeklyProgressBar").style.width = `${percent}%`;
  $("#mainStreakText").textContent = `${state.water.streak} días`;

  bindCheckItemEvents();
}

function synchronizeAutomaticGoals() {
  const waterGoal = state.goals.find(
    (goal) => goal.id === "goal-2"
  );

  if (waterGoal) {
    waterGoal.name =
      `Beber ${formatNumber(state.profile.waterGoal)} ml de agua`;

    waterGoal.completed =
      state.water.current >= state.profile.waterGoal;
  }

  const supplementGoal = state.goals.find(
    (goal) => goal.id === "goal-4"
  );

  if (supplementGoal) {
    supplementGoal.completed =
      state.supplements.length > 0 &&
      state.supplements.every(
        (supplement) => supplement.completed
      );
  }
}

/* =========================================================
   ELEMENTOS MARCABLES
========================================================= */

function createCheckItem({
  type,
  id,
  icon,
  name,
  description,
  completed
}) {
  return `
    <article class="check-item ${completed ? "completed-item" : ""}">
      <div class="check-item-icon">${icon}</div>

      <div>
        <strong>${escapeHTML(name)}</strong>
        <p>${escapeHTML(description)}</p>
      </div>

      <button
        class="custom-checkbox ${completed ? "checked" : ""}"
        type="button"
        data-check-type="${escapeHTML(type)}"
        data-check-id="${escapeHTML(id)}"
        aria-label="${completed ? "Marcar pendiente" : "Marcar completado"}"
      >
        ${completed ? "✓" : ""}
      </button>
    </article>
  `;
}

function bindCheckItemEvents() {
  $$("[data-check-type]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleCheckItem(
        button.dataset.checkType,
        button.dataset.checkId
      );
    });
  });
}

function toggleCheckItem(type, id) {
  const collectionMap = {
    supplement: state.supplements,
    meal: state.meals,
    goal: state.goals
  };

  const collection = collectionMap[type];

  if (!collection) {
    return;
  }

  const item = collection.find((entry) => entry.id === id);

  if (!item) {
    return;
  }

  item.completed = !item.completed;

  if (item.completed) {
    state.forest.points += 5;
    vibrateDevice(25);
    showToast(`${item.name} completado ✓`);
  } else {
    state.forest.points = Math.max(0, state.forest.points - 5);
  }

  const todayIndex = new Date().getDay();
  const statisticsIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  if (type === "meal") {
    state.statistics.meals[statisticsIndex] =
      countCompleted(state.meals);
  }

  renderAll();
}

/* =========================================================
   FORMULARIO DE SUPLEMENTOS
========================================================= */

function openSupplementForm() {
  openModal({
    eyebrow: "NUEVO SUPLEMENTO",
    title: "Agregar suplemento",
    content: `
      <form id="newSupplementForm">
        <label class="form-label">
          Nombre
          <input
            id="newSupplementName"
            type="text"
            placeholder="Ejemplo: Proteína"
            required
          >
        </label>

        <label class="form-label">
          Momento
          <input
            id="newSupplementInstruction"
            type="text"
            placeholder="Ejemplo: Después del entrenamiento"
            required
          >
        </label>

        <label class="form-label">
          Horario
          <input
            id="newSupplementTime"
            type="time"
            value="20:00"
            required
          >
        </label>

        <button class="primary-button full-width" type="submit">
          Guardar suplemento
        </button>
      </form>

      <p class="health-note">
        Registra solo productos y cantidades indicados en su etiqueta
        o por un profesional de salud.
      </p>
    `
  });

  $("#newSupplementForm").addEventListener("submit", (event) => {
    event.preventDefault();

    state.supplements.push({
      id: createId("supplement"),
      name: $("#newSupplementName").value.trim(),
      icon: "💊",
      instruction: $("#newSupplementInstruction").value.trim(),
      time: $("#newSupplementTime").value,
      completed: false
    });

    saveState();
    closeModal();
    renderAll();
    showToast("Suplemento agregado.");
  });
}

/* =========================================================
   FORMULARIO DE METAS
========================================================= */

function openGoalForm() {
  openModal({
    eyebrow: "NUEVA META",
    title: "Agregar meta diaria",
    content: `
      <form id="newGoalForm">
        <label class="form-label">
          Nombre de la meta
          <input
            id="newGoalName"
            type="text"
            placeholder="Ejemplo: Dormir 8 horas"
            required
          >
        </label>

        <label class="form-label">
          Icono
          <select id="newGoalIcon">
            <option value="🎯">🎯 Meta</option>
            <option value="🌙">🌙 Sueño</option>
            <option value="🏋️">🏋️ Entrenamiento</option>
            <option value="🥗">🥗 Alimentación</option>
            <option value="💧">💧 Agua</option>
            <option value="📚">📚 Estudio</option>
            <option value="🌿">🌿 Bienestar</option>
          </select>
        </label>

        <button class="primary-button full-width" type="submit">
          Guardar meta
        </button>
      </form>
    `
  });

  $("#newGoalForm").addEventListener("submit", (event) => {
    event.preventDefault();

    state.goals.push({
      id: createId("goal"),
      name: $("#newGoalName").value.trim(),
      icon: $("#newGoalIcon").value,
      completed: false
    });

    saveState();
    closeModal();
    renderAll();
    showToast("Meta agregada.");
  });
}

/* =========================================================
   ESTADÍSTICAS
========================================================= */

function renderStatistics() {
  const trainingCompleted = state.statistics.training.reduce(
    (total, value) => total + Number(Boolean(value)),
    0
  );

  const trainingPercent = calculatePercentage(
    trainingCompleted,
    7
  );

  $("#trainingChartSummary").textContent =
    `${trainingCompleted} de 7 completados`;

  $("#trainingChartPercent").textContent =
    `${trainingPercent}%`;

  renderBarChart(
    $("#trainingBars"),
    state.statistics.training,
    1
  );

  const waterAverage = Math.round(
    average(state.statistics.water)
  );

  $("#waterChartAverage").textContent =
    `${formatNumber(waterAverage)} ml`;

  renderBarChart(
    $("#waterBars"),
    state.statistics.water,
    Math.max(state.profile.waterGoal, ...state.statistics.water)
  );

  const mealAverage = average(state.statistics.meals);

  $("#mealChartAverage").textContent =
    `${mealAverage.toFixed(1)} de 5`;

  renderBarChart(
    $("#mealBars"),
    state.statistics.meals,
    5
  );
}

function renderBarChart(container, values, maximum) {
  const labels = ["L", "M", "X", "J", "V", "S", "D"];

  container.innerHTML = values
    .map((value, index) => {
      const height = Math.max(
        5,
        calculatePercentage(value, maximum)
      );

      return `
        <div class="bar-column">
          <div
            class="bar"
            style="height: ${height}%"
            title="${escapeHTML(String(value))}"
          ></div>
          <span>${labels[index]}</span>
        </div>
      `;
    })
    .join("");
}

/* =========================================================
   BOSQUE
========================================================= */

function renderForest() {
  const points = Math.max(0, state.forest.points);
  const treeCount = Math.max(1, Math.floor(points / 20) + 1);
  const birdCount = Math.floor(points / 80);
  const level = Math.max(1, Math.floor(points / 100) + 1);

  const levels = [
    {
      name: "Semilla",
      description: "Tu bosque está comenzando a crecer."
    },
    {
      name: "Brote verde",
      description: "Tus hábitos ya están creando nuevas plantas."
    },
    {
      name: "Arboleda",
      description: "Tu constancia está formando un pequeño bosque."
    },
    {
      name: "Bosque vivo",
      description: "Aves y árboles llenan tu espacio personal."
    },
    {
      name: "Bosque legendario",
      description: "Has construido una gran racha saludable."
    }
  ];

  const selectedLevel =
    levels[Math.min(level - 1, levels.length - 1)];

  const treeEmojis = ["🌲", "🌳", "🌴", "🌿"];

  $("#forestTrees").innerHTML = Array.from(
    { length: Math.min(treeCount, 20) },
    (_, index) => {
      const size = 2.1 + ((index * 7) % 15) / 10;

      return `
        <span
          class="forest-tree"
          style="
            font-size: ${size}rem;
            animation-delay: ${index * 0.05}s;
          "
        >
          ${treeEmojis[index % treeEmojis.length]}
        </span>
      `;
    }
  ).join("");

  $("#birdsContainer").innerHTML = Array.from(
    { length: Math.min(birdCount, 6) },
    (_, index) => `
      <span
        class="forest-bird"
        style="animation-delay: ${index * 0.4}s"
      >
        🐦
      </span>
    `
  ).join("");

  $("#forestLevelName").textContent = selectedLevel.name;
  $("#forestLevelDescription").textContent =
    selectedLevel.description;

  $("#forestLevelNumber").textContent = level;
  $("#treeCount").textContent = treeCount;
  $("#birdCount").textContent = birdCount;
  $("#forestPoints").textContent = points;
}

/* =========================================================
   PERFIL
========================================================= */

function renderProfile() {
  $("#profileNameInput").value = state.profile.name;
  $("#profileWaterGoalInput").value =
    state.profile.waterGoal;

  $("#quietStartInput").value = state.profile.quietStart;
  $("#quietEndInput").value = state.profile.quietEnd;

  $("#darkModeSwitch").checked = state.profile.darkMode;
  $("#animationSwitch").checked = state.profile.animations;
  $("#reminderSwitch").checked = state.profile.reminders;
}

function saveProfile() {
  const profileName = $("#profileNameInput").value.trim();
  const waterGoal = Number($("#profileWaterGoalInput").value);

  if (!profileName) {
    showToast("Debes escribir un nombre.");
    return;
  }

  if (!Number.isFinite(waterGoal) || waterGoal < 500 || waterGoal > 6000) {
    showToast("La meta de agua debe estar entre 500 y 6.000 ml.");
    return;
  }

  state.profile.name = "Rocío";
  state.profile.waterGoal = waterGoal;
  state.profile.quietStart = $("#quietStartInput").value;
  state.profile.quietEnd = $("#quietEndInput").value;

  synchronizeWaterGoalText();
  saveState();
  renderAll();

  showToast("Perfil de Rocío actualizado.");
}

function synchronizeWaterGoalText() {
  const waterGoal = state.goals.find(
    (goal) => goal.id === "goal-2"
  );

  if (waterGoal) {
    waterGoal.name =
      `Beber ${formatNumber(state.profile.waterGoal)} ml de agua`;
  }
}

function toggleDarkMode(event) {
  state.profile.darkMode = event.target.checked;
  applyPreferences();
  saveState();
}

function quickThemeToggle() {
  state.profile.darkMode = !state.profile.darkMode;
  applyPreferences();
  renderProfile();
  saveState();
  closeMenu();
}

function toggleAnimations(event) {
  state.profile.animations = event.target.checked;
  applyPreferences();
  saveState();
}

function toggleReminders(event) {
  state.profile.reminders = event.target.checked;

  if (state.profile.reminders) {
    requestNotificationPermission();
  }

  saveState();
}

function applyPreferences() {
  document.body.classList.toggle(
    "dark-mode",
    Boolean(state.profile.darkMode)
  );

  document.body.classList.toggle(
    "reduce-motion",
    !state.profile.animations
  );
}

/* =========================================================
   MODALES
========================================================= */

function openModal({ eyebrow, title, content }) {
  $("#modalEyebrow").textContent = eyebrow;
  $("#modalTitle").textContent = title;
  $("#modalContent").innerHTML = content;
  $("#modalBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
  $("#modalContent").innerHTML = "";
  document.body.style.overflow = "";
}

function openQuickAddModal() {
  openModal({
    eyebrow: "REGISTRO RÁPIDO",
    title: "¿Qué quieres agregar?",
    content: `
      <div class="quick-add-grid">
        <button
          class="quick-add-option"
          type="button"
          data-quick-action="water"
        >
          <span>💧</span>
          Agregar agua
        </button>

        <button
          class="quick-add-option"
          type="button"
          data-quick-action="training"
        >
          <span>🏋️</span>
          Entrenamiento
        </button>

        <button
          class="quick-add-option"
          type="button"
          data-quick-action="meal"
        >
          <span>🥗</span>
          Registrar comida
        </button>

        <button
          class="quick-add-option"
          type="button"
          data-quick-action="supplement"
        >
          <span>💊</span>
          Suplemento
        </button>

        <button
          class="quick-add-option"
          type="button"
          data-quick-action="goal"
        >
          <span>🎯</span>
          Nueva meta
        </button>

        <button
          class="quick-add-option"
          type="button"
          data-quick-action="forest"
        >
          <span>🌲</span>
          Ver mi bosque
        </button>
      </div>
    `
  });

  $$("[data-quick-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.quickAction;

      if (action === "water") {
        closeModal();
        addWater(250);
      }

      if (action === "training") {
        openTrainingForm();
      }

      if (action === "meal") {
        closeModal();
        showView("food");
      }

      if (action === "supplement") {
        openSupplementForm();
      }

      if (action === "goal") {
        openGoalForm();
      }

      if (action === "forest") {
        closeModal();
        showView("forest");
      }
    });
  });
}

/* =========================================================
   NOTIFICACIONES
========================================================= */

async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    showToast("Este navegador no admite notificaciones web.");
    return;
  }

  if (Notification.permission === "granted") {
    state.profile.reminders = true;
    $("#reminderSwitch").checked = true;
    $("#notificationDot").classList.add("hidden");
    saveState();

    new Notification("Focus Forest 🌿", {
      body: "Las notificaciones de Rocío están activadas.",
      icon: "./icons/icon-192.svg"
    });

    return;
  }

  if (Notification.permission === "denied") {
    showToast(
      "Las notificaciones están bloqueadas en la configuración del navegador."
    );
    return;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      state.profile.reminders = true;
      $("#reminderSwitch").checked = true;
      $("#notificationDot").classList.add("hidden");

      new Notification("Focus Forest 🌿", {
        body: "Recordatorios activados correctamente.",
        icon: "./icons/icon-192.svg"
      });

      showToast("Notificaciones activadas.");
    } else {
      state.profile.reminders = false;
      $("#reminderSwitch").checked = false;
      showToast("No se activaron las notificaciones.");
    }

    saveState();
  } catch (error) {
    console.error(error);
    showToast("No fue posible solicitar notificaciones.");
  }
}

/* =========================================================
   EXPORTAR Y REINICIAR
========================================================= */

function exportData() {
  const fileContent = JSON.stringify(state, null, 2);
  const blob = new Blob([fileContent], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "focus-forest-rocio-respaldo.json";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);

  showToast("Copia de seguridad creada.");
}

function resetData() {
  const confirmed = window.confirm(
    "¿Seguro que quieres borrar todos los registros y reiniciar la aplicación?"
  );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);

  applyPreferences();
  renderAll();
  showView("today");

  showToast("La aplicación fue reiniciada.");
}

/* =========================================================
   CONEXIÓN Y SERVICE WORKER
========================================================= */

function updateOnlineStatus() {
  $("#offlineBanner").classList.toggle(
    "hidden",
    navigator.onLine
  );
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register(
        "./service-worker.js"
      );

      console.log("Service Worker registrado.");
    } catch (error) {
      console.error(
        "No se pudo registrar el Service Worker:",
        error
      );
    }
  });
}

/* =========================================================
   UTILIDADES
========================================================= */

function calculatePercentage(value, maximum) {
  if (!maximum || maximum <= 0) {
    return 0;
  }

  return Math.min(
    100,
    Math.max(0, Math.round((value / maximum) * 100))
  );
}

function countCompleted(collection) {
  return collection.filter((item) => item.completed).length;
}

function average(values) {
  if (!values.length) {
    return 0;
  }

  return (
    values.reduce((total, value) => total + Number(value), 0) /
    values.length
  );
}

function setRingValue(element, percentage) {
  element.style.setProperty(
    "--ring-value",
    `${Math.min(100, Math.max(0, percentage))}%`
  );
}

function formatNumber(value) {
  return new Intl.NumberFormat("es-CL").format(value);
}

function createId(prefix) {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random()
    .toString(16)
    .slice(2)}`;
}

function calculateDuration(startTime, endTime) {
  const [startHour, startMinute] = startTime
    .split(":")
    .map(Number);

  const [endHour, endMinute] = endTime
    .split(":")
    .map(Number);

  const start = startHour * 60 + startMinute;
  let end = endHour * 60 + endMinute;

  if (end < start) {
    end += 24 * 60;
  }

  return Math.max(0, end - start);
}

function vibrateDevice(duration) {
  if ("vibrate" in navigator) {
    navigator.vibrate(duration);
  }
}

function createEmptyState(icon, message) {
  return `
    <div class="empty-state">
      <span>${icon}</span>
      ${escapeHTML(message)}
    </div>
  `;
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("visible-toast");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("visible-toast");
  }, 2800);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

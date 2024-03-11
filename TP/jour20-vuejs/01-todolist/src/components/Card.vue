<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <!-- slot nommé pour le header -->
        <slot name="header"> header par defaut </slot>
      </h5>

      <p class="card-text">
        <!-- slot par défaut (pas de nom) -->
        <slot>Texte du body ici</slot>
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script></script>

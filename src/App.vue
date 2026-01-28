<script setup>
import { computed, h} from 'vue';
import { useAppStore } from '@/stores/app';
import { usePopupStore } from '@/stores/popup';
import { PopupComponent } from '@/components/popup';
import Headers from '@/features/Headers.vue';
import Footers from '@/features/Footers.vue';
import Navs from './features/Navs.vue';

const popupStore = usePopupStore();
const appStore = useAppStore();
const renderPopups = () => {
  return popupStore.getPopups.map((popup) =>
    h(PopupComponent, {
      key: popup.id,
      id: popup.id,
      type: popup.type,
      content: popup.content,
      isOpen: popup.isOpen,
      useCheckbox: popup.useCheckbox
    })
  );
};
</script>
<template>
  <div class="global-outer">
    <div class="global-contaner">
      <Headers />
      <Navs />
      <div class="contents">
        <RouterView />
      </div>
      <Footers />
    </div>
  </div>
  <component :is="renderPopups" />
</template>

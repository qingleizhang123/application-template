<template>
  <a-button @click="reload" type="primary">ReLoad</a-button>
  <a-table :columns="columns" :data-source="studies"  rowKey="studyInstanceUID">
    <template #operation="{ record }">
      <a @click="onStudyRowClick(record.studyInstanceUID)">查看序列</a>
    </template>
  </a-table>
  <template v-if="seriesList.length> 0">
    <a-checkbox-group style="width: 100%" v-model:value="checkedSeriesList" @change="checkSeries($event)">
      <a-row>
        <a-col :span="6" v-for="item in seriesList" :key="item">
          <img :src="item.thumbnail" alt="img" />
          <a-checkbox :value="item.seriesUid">{{item.descritpion}}</a-checkbox>
        </a-col>
      </a-row>
    </a-checkbox-group>
  </template>
  <template v-if="seriesList.length > 0">
    <div v-for="app in appList" :key="app">
      <a-button @click="startApp(app.appName)" :disabled="checkedSeriesList.length === 0">{{app.appName}}</a-button>
    </div>
  </template>
</template>

<script lang="ts" src="./Home.tsx"/>

<style scoped lang="less" src="./Home.less"></style>

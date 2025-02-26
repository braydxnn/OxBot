import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../interfaces/command';

const Guild: Command = {
  data: new SlashCommandBuilder()
    .setName('guild')
    .setDescription('Get an invite link to the selected Guild')
    .addStringOption((option) =>
      option
        .setName('name')
        .setDescription('Guild name')
        .setRequired(true)
        .addChoices(
          { name: 'ESX', value: 'esx' },
          { name: 'QBCore', value: 'qb' },
          { name: 'project-error', value: 'project-error' },
          { name: 'txAdmin', value: 'txAdmin' },
          { name: 'Cfx.re', value: 'cfx' }
        )
    ),
  run: async (interaction) => {
    switch (interaction.options.getString('name')) {
      case 'qb':
        return interaction.reply('https://discord.gg/qbcore');
      case 'esx':
        return interaction.reply('https://discord.com/invite/VKX6DHVyhV');
      case 'project-error':
        return interaction.reply('https://discord.gg/FbFXcM5rGz');
      case 'txAdmin':
        return interaction.reply('https://discord.gg/yWxjt9zPWR');
      case 'cfx':
        return interaction.reply('https://discord.gg/fivem');
    }
  },
};

export default Guild;

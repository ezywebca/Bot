import { Command, CommandContext, Permission } from './command';

export default class FlipCommand implements Command {
  precondition: Permission = '';
  name = 'vote';
  summary = 'Get 3PG voting links, and support 3PG';
  cooldown = 1;
  module = 'General';
  
  execute = async(ctx: CommandContext) => {
    return ctx.channel.send(`When We List Our Bot We Will Ad A Vote`.trim()
    );
  }
}

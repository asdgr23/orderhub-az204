import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [OrdersModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}

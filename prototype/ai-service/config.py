"""
Configuration settings for AI Service
"""
import os
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application settings"""
    
    # App settings
    APP_NAME: str = "LittleStar AI Service"
    DEBUG: bool = False
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:password@localhost:5432/littlestar"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # AI Provider - Alibaba Cloud DashScope (通义千问)
    DASHSCOPE_API_KEY: str = ""
    DASHSCOPE_MODEL: str = "qwen-max"
    
    # Alternative: OpenAI
    OPENAI_API_KEY: str = ""
    OPENAI_MODEL: str = "gpt-4o"
    
    # AI Provider Selection
    AI_PROVIDER: str = "dashscope"  # "dashscope" or "openai"
    
    # Alibaba Cloud OSS
    OSS_ACCESS_KEY_ID: str = ""
    OSS_ACCESS_KEY_SECRET: str = ""
    OSS_BUCKET_NAME: str = "littlestar-audio"
    OSS_ENDPOINT: str = "oss-cn-hangzhou.aliyuncs.com"
    
    # Alibaba Cloud Speech Recognition
    ASR_APP_KEY: str = ""
    
    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance"""
    return Settings()
